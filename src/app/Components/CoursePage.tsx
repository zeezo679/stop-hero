'use client';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  LinearProgress,
  Box,
  Typography,
  Divider,
  CircularProgress,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import PropTypes from 'prop-types';
import Link from 'next/link';

function CircularProgressWithLabel({ value }: { value: number }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

interface CoursePageProps {
  name: string;
  overview: string;
  icon: string;
  progress?: number;
  links: {
    label: string;
    href?: string;
    locked?: boolean;
  }[];
}

export default function CoursePage({ name, overview, icon, links, progress = 0 }: CoursePageProps) {
  const [progressState, setProgress] = useState(progress);
  const [progress2, setProgress2] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) return 100;
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress2((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
          <header className="mb-6 md:col-span-2">
            <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Overview</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">{overview}</p>
          </header>
          <div className="flex justify-center items-center">
            <img src={icon} alt={`${name} Icon`} className="w-40 h-40 md:w-52 md:h-52 object-contain" />
          </div>
        </div>

        <Container maxWidth={false} sx={{ py: 6 }}>
          <Card className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <header className="mb-6 ">
              <Grid container spacing={2} alignItems="center" className="justify-between flex">
                <Grid item xs={12} sm={7}>
                  <Typography variant="h5" className="text-indigo-600 dark:text-indigo-300 font-bold mb-2">
                    {name} Course Progress
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={5} >
                  <Box className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 w-[200px]">
                    <LinearProgress variant="determinate" value={progressState} />
                    <Typography variant="body2" className="mt-2 text-center">
                      {`${Math.round(progressState)}% completed`}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </header>

            <Divider className="my-4" />

            <main className="mt-6 space-y-4">
              {links.map((link, idx) => (
                <Box key={idx} display="flex" alignItems="center" gap={2}>
                  {link.locked ? (
                    <LockIcon className="text-gray-400 dark:text-gray-500" />
                  ) : (
                    <CircularProgressWithLabel value={progress2} />
                  )}
                  {link.href ? (
                    <Link href={link.href}>
                      <Typography className="text-gray-700 dark:text-gray-300 hover:underline cursor-pointer">
                        {link.label}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography className="text-gray-500 dark:text-gray-400">{link.label}</Typography>
                  )}
                </Box>
              ))}
            </main>
          </Card>
        </Container>
      </div>
    </div>
  );
}
