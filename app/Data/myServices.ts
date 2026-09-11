// Icon Types
import { IconType } from "react-icons";
// Icon Types

// Icons
import { AiOutlineHtml5 } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";
// Icons

export const myServices: {
  id: string;
  name: string;
  ImageData: IconType;
  content: string;
}[] = [
  {
    id: "service-1",
    name: "Frontend Development",
    ImageData: AiOutlineHtml5,
    content:
      "Creating fast, responsive, and user-focused web interfaces with modern technologies such as React.js, Next.js, and TypeScript.",
  },
  {
    id: "service-2",
    name: "Backend Development",
    ImageData: FaNodeJs,
    content:
      "Engineering robust and scalable server-side applications and APIs using Node.js, NestJS, Express.js, and modern database technologies.",
  },
  {
    id: "service-3",
    name: "Custom PC Building",
    ImageData: MdComputer,
    content:
      "Designing customized PC builds that deliver the best balance of performance, quality, and value for your specific needs and budget.",
  },
  {
    id: "service-4",
    name: "System Repair & Optimization",
    ImageData: GiAutoRepair,
    content:
      "Troubleshooting, repairing, and optimizing computer systems to improve performance, reliability, and overall user experience.",
  },
];
