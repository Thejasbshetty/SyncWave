import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function createProject(data) {
    const { userId, orgId } = auth();
    if (!userId) {
        throw new Error("Unauthorized");
    }
    if(!orgId){
        throw new Error("Organization not found");
    }

    const { data: membership } = 
        await clerkClient().organizations.getOrganizationMembershipList({
            organizationId: organization.id,
        });

    const userMembership = membership.find(
        (member) => member.publicUserData.userId === userId
    );

    if(!userMembership || userMembership.role !== "org:admin"){
        throw new Error("only admin can create projects");
    }

    try {
        const project = await db.project.create({
            data: {
                name: data.name,
                Key: data.key,
                description: data.description,
                organization: orgId,
            },
        });
        return project;
    } catch (error) {
        throw new Error("error creating the project: "+error.message);
    }
}