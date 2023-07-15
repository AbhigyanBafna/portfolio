// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { projectsQuery } from "@/utils/queries";
import { client } from "../../utils/sanityUtils"

export default async function handler(req, res) {
    const projects = await client.fetch(projectsQuery);

    res.status(200).json({ projects });
};