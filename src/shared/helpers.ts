import shopifyImg from "@/assets/jobs/shopify.png";
import magnetoImg from "@/assets/jobs/magneto.png";
import webflowImg from "@/assets/jobs/web_flow.png";
import dataScientistImg from "@/assets/jobs/data_scientist.png";
import dotNetImg from "@/assets/jobs/dot_net.png";
import figmaImg from "@/assets/jobs/figma.png";
import photoshopImg from "@/assets/jobs/photoshop.png";
import adobeImg from "@/assets/jobs/adobe_illustrator.png";
import unrealImg from "@/assets/jobs/unreal.png";
import cinema4dImg from "@/assets/jobs/cinema_4d.png";
import talents1 from "@/assets/talents1.png"
import talents2 from "@/assets/talents2.png"
import talents3 from "@/assets/talents3.png"

import category1Img from "@/assets/categories/category1.png"
import category2Img from "@/assets/categories/category2.png"
import category3Img from "@/assets/categories/category3.png"

export const jobs = [
    "Shopify Developer",
    "MERN Stack Developer",
    "Full Stack Developer",

    "Data Scientist",
    "Front End Developer",
    "Python Developer",
    "Shopify Developer",

    "Shopify Developer",
    "Python Developer",
    "Full Stack Developer",
]

export const jobsList = [
    {
        image: shopifyImg,
        label: "Shopify Developer"
    },
    {
        image: magnetoImg,
        label: "Magneto Developer"
    },
    {
        image: dataScientistImg,
        label: "Data Scientist"
    },
    {
        image: webflowImg,
        label: "Webflow Developer"
    },
    {
        image: dotNetImg,
        label: "Dot Net Developer"
    },
    {
        image: figmaImg,
        label: "UX Designer"
    },
    {
        image: photoshopImg,
        label: "Graphics Designer"
    },
    {
        image: adobeImg,
        label: "Illustration Artist"
    },
    {
        image: unrealImg,
        label: "Unreal Engine"
    },
    {
        image: cinema4dImg,
        label: "Cinema 4D"
    }
]

export const recuirementProcess = [
    "Resume Screening",
    "Video Interview",
    "Technical Evaluation",
    "Application Review",
    "Lets get to work"
]

export const journeyProcess = [
    {
        title: "Find your next star performer.",
        body: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
        image: talents1,
        bgColor: "bg-color-7"
    },
    {
        title: "Evaluate to your heart’s content.",
        body: "Assess the candidate through work history, transparent tests and video interviews.",
        btnText: "Browse More",
        bgColor: "bg-color-16",
        image: talents2,
    },
    {
        title: "Start building your team.",
        body: "Onboard your candidate right away and start creating the next big thing.",
        bgColor: "bg-color-17",
        image: talents3,
    }
]


export const productReasons = [
    {
        title: "Onboard without the risk",
        labels: ["We pick the best of for you to select.",
            "Thousands of vetted candidates in dozens of categories.",
            "Risk-free resource swapping for ther best fit"
        ],
        image: category1Img,
    },
    {
        title: "An open book.",
        labels: ["Easy and transparent one-to-one chat with candidates.",
            "Simple and convenient payment methods.",
            "Review past ratings."],
        image: category2Img,
    }, {
        title: "Stay in the loop.",
        labels: ["Track your staff activity down to every minute with screenshots.",
            "Comprehensive timesheet data to process payments.",
            "Create projects to organize and assign tasks more effectively."],
        image: category3Img,
    }
]