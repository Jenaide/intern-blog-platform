import prisma from '../../utils/connect'
import { NextResponse } from "next/server";
import { getAuthSession } from "../../utils/auth";

export const GET = async (req) => {
    try {
        if (!req.url) {
            throw new Error('Request URL is undefined');
        }
        const { searchParams } = new URL(req.url)

        const page = parseInt(searchParams.get('page')) || 1;
        const cat = searchParams.get('cat');

        const NUMBER_OF_PAGES = 2;
        const ITEMS_PER_PAGE = 10;

        const skip = (page - 1) * ITEMS_PER_PAGE;

        const q = {
            take: NUMBER_OF_PAGES,
            skip: skip,
            where: {
                ...(cat && { catSlug: cat })
        }
    };
    const [posts, count] = await prisma.$transaction([
        prisma.post.findMany(q),
        prisma.post.count({ where: q.where }),
    ])
    return new NextResponse(JSON.stringify(posts, { status: 200 }));

    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "An error occured" }, { status: 500 }),
        );
    };
};

// Create a new post

export const POST = async () => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "Not Authenticated" }, { status: 401 })
        )
    }

    try {
        const body = await request.json();
        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email },
        });
        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: 'An error occured' }, { status: 500 })
        );
    };
};