"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/SupabaseClient"; // Adjust the import path as needed
export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState({
    full_name: "",
    phone: "",
    avatar_url: "",
    email: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        router.replace("/login");
        return;
      }
      setUser(user);
      setProfile((prev) => ({
        ...prev,
        email: user.email,
        full_name: user.user_metadata?.full_name || "",
        avatar_url: user.user_metadata?.avatar_url || "",
      }));
      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, phone, avatar_url")
        .eq("id", user.id)
        .single();
      if (data) {
        setProfile({
          ...profile,
          full_name: data.full_name || user.user_metadata?.full_name || "",
          phone: data.phone || "",
          avatar_url: data.avatar_url || user.user_metadata?.avatar_url || "",
          email: user.email,
        });
      }
      setLoading(false);
    };
    fetchProfile();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e: any) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = async (e: any) => {
    const file = e.target.files[0];
    if (!file || !user) return;
        console.log(file.name); // file name (e.g., userId.jpg)
    const fileExt = file.name.split(".").pop();
    const filePath = `${user.id}.${fileExt}`;
    console.log(filePath); // file path in storage (e.g., avatars/userId.jpg)
    let { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, file, { upsert: true });
    if (uploadError) {
      setToast({ type: "error", message: "Failed to upload avatar." });
      return;
    }
    const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
    setProfile((prev) => ({ ...prev, avatar_url: data.publicUrl }));
    setToast({ type: "success", message: "Avatar updated!" });
  };

  const handleSave = async () => {
    setSaving(true);
    const updates = {
      id: user.id,
      full_name: profile.full_name,
      phone: profile.phone,
      avatar_url: profile.avatar_url,
      updated_at: new Date(),
    };
    const { error } = await supabase.from("profiles").upsert(updates, { returning: "minimal" });
    setSaving(false);
    if (error) {
      setToast({ type: "error", message: "Failed to update profile." });
    } else {
      setToast({ type: "success", message: "Profile updated!" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-2 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Profile Settings</h2>
        {loading ? (
          <div className="text-center text-gray-500 py-12">Loading...</div>
        ) : (
          <>
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <img
                  src={profile.avatar_url || "https://api.dicebear.com/6.x/fun-emoji/png?seed=avatar"}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full border-4 border-purple-400 object-cover shadow"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-2 shadow hover:bg-purple-700 transition"
                  title="Change avatar"
                  type="button"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h6" />
                  </svg>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  value={profile.full_name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-200 bg-gray-100 text-gray-500 shadow-sm cursor-not-allowed"
                />
              </div>
            </div>
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button
              onClick={handleLogout}
              className="w-full mt-2 py-2 rounded-lg bg-red-100 text-red-600 font-semibold shadow hover:bg-red-200 transition"
            >
              Log Out
            </button>
          </>
        )}
        {toast && (
          <div
            className={`fixed left-1/2 -translate-x-1/2 bottom-8 px-6 py-3 rounded-lg shadow-lg text-white font-semibold z-50 transition-all
              ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
            onAnimationEnd={() => setToast(null)}
          >
            {toast.message}
          </div>
        )}
      </div>
    </div>
  );
}
