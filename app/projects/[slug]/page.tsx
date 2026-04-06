import { client } from "@/sanity/client";
import { projectBySlugQuery, projectsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const projects = await client.fetch(projectsQuery);
    return projects?.map((p: any) => ({ slug: p.slug?.current })) || [];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const project = await client.fetch(projectBySlugQuery, { slug });
    return {
      title: project ? `${project.title} — Abdallah Ahmed` : "Project — Abdallah Ahmed",
      description: project?.title
        ? `${project.title} — A project by Abdallah Ahmed, Graphic Designer`
        : "Project by Abdallah Ahmed",
    };
  } catch {
    return {
      title: "Project — Abdallah Ahmed",
    };
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project;
  try {
    project = await client.fetch(projectBySlugQuery, { slug });
  } catch {
    project = null;
  }

  if (!project) {
    notFound();
  }

  const coverUrl = project.coverImage
    ? urlFor(project.coverImage).width(1920).height(1080).format("webp").url()
    : null;

  const galleryUrls = project.gallery
    ? project.gallery.map((img: any) =>
      urlFor(img).width(1200).height(800).format("webp").url()
    )
    : [];

  return (
    <ProjectDetailClient
      project={project}
      coverUrl={coverUrl}
      galleryUrls={galleryUrls}
    />
  );
}
