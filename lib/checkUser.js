import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    // Try to find user by clerkUserId
    let loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    // If not found, try to find by email
    if (!loggedInUser) {
      loggedInUser = await db.user.findUnique({
        where: {
          email: user.emailAddresses[0].emailAddress,
        },
      });
    }

    // If still not found, create new user
    if (!loggedInUser) {
      const name = `${user.firstName} ${user.lastName}`;
      loggedInUser = await db.user.create({
        data: {
          clerkUserId: user.id,
          name,
          imageUrl: user.imageUrl,
          email: user.emailAddresses[0].emailAddress,
        },
      });
    }

    return loggedInUser;
  } catch (error) {
    console.log(error.message);
  }
};
