'use client';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import LockIcon from '@mui/icons-material/Lock';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import Link from 'next/link';

const Course={
    id:1,
    name:"HTML",
    overVeiw:"HTML (HyperText Markup Language) is the standard markup language used to create web pages. It defines the structure and semantics of your content, allowing browsers to render text, images, videos, and more.",
    icon:"https://cdn-icons-png.flaticon.com/512/919/919827.png"
}


function CircularProgressWithLabel(props) {
return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
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
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary' }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};


export default function HTMLSection() {
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) return 100;
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress2((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      {/* Overview Section */}
        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-blue-200 dark:hover:shadow-blue-900 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
            <header className="mb-6 md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Overview</h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            {Course.overVeiw} <br />
                            </p>
            </header>
            <div className="flex justify-center items-center">
            <img
                src={Course.icon}
                alt="HTML5 Icon"
                className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
            />
            </div>
        </div>
        {/* Card with Progress */}
        <Container maxWidth={false} sx={{ py: 6 }} className="flex justify-center items-center mt-5 w-full">
            <Card className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full max-w-6xl transition-all duration-300 hover:shadow-blue-200 dark:hover:shadow-blue-900">
                <header className="mb-6">
                    <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={7} size={8}>
                        <Typography variant="h5" component="h2" className="text-indigo-600 dark:text-indigo-300 mb-2 font-bold">
                        {Course.name} Course Progress
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} size={4} className="flex justify-end">
                        <Box sx={{ width: '100%' }} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 md:p-4 shadow-md transition-all duration-300 hover:shadow-blue-200 dark:hover:shadow-blue-900">
                        <LinearProgress variant="determinate" value={progress} />
                        <Typography variant="body2" color="text.secondary" className="mt-2 text-center md:text-left">
                            {`${Math.round(progress)}% completed`}
                        </Typography>
                        </Box>
                    </Grid>
                    </Grid>
                </header>
                <Divider className="my-4" />
                <main className="mt-6">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box display="flex" alignItems="center" mb={2}>
                            <CircularProgressWithLabel value={progress2} className=" mr-3" />
                            <Link href="../FUNDHTML">
                                <Typography variant="body1" className="ml-3 text-gray-700 dark:text-gray-300">
                                    Fundational Topics
                                </Typography>
                            </Link>
                            </Box>
                            <Box display="flex" alignItems="center" mb={2}>
                                <LockIcon className=" mr-3" />
                                <Link href="../IntermediateHtmlTopics">
                                  <Typography variant="body1" className="text-gray-700 dark:text-gray-300">
                                      Intermediate Topics
                                  </Typography>
                                </Link>
                                
                            </Box>
                            <Box display="flex" alignItems="center" mb={2}>
                                <LockIcon className="dark:text-gray-600 mr-3" />
                                <Link href="../AdvancedHtmlTopics">
                                <Typography variant="body1" className="dark:text-gray-300">
                                    Advanced Topics
                                </Typography>
                                </Link>
                                
                            </Box>
                            <Box display="flex" alignItems="center">
                                <LockOutlineIcon className="mr-3" />
                                <Typography variant="body1" className="text-gray-700 dark:text-gray-300">
                                    Practical Projects
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </main>
            </Card>
        </Container>
    </div>


    </div>
);
}