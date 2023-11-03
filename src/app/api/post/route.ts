import { NextRequest } from "next/server"
import {prisma} from "@/../lib/prisma";
import { IPostResponse, IPostRequest } from "@/app/common/type"; 

const formatPost = (post: IPostResponse) => ({
  id: post.id,
  title: post.title,
  subtitle: post.subtitle,
  description: post.description,
  createdAt: post?.createdAt instanceof Date ? post?.createdAt.toISOString() : post?.createdAt,
  updatedAt: post?.updatedAt instanceof Date ? post?.updatedAt.toISOString() : post?.updatedAt,
  postTypeId: {
    id: post.postTypeId.id ?? '',
    label: post.postTypeId.label ?? '',
    value: post.postTypeId.value ?? '',
  },
});


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    let data;

    if (id) {
      const post = await prisma.post.findUnique({
        where: {
          id: id,
        },
        include: {
          postType: true,
        },
      });

      data = post ? formatPost(post) : null;
      console.log('🚀 ~ file: route.ts ~ line 65 ~ GET ~ data',id, data)
    } else {
      const posts = await prisma.post.findMany({
        include: {
          postType: true,
        },
      });

      data = posts.map((post) => formatPost(post));
      console.log('🚀 ~ file: route.ts ~ line 74 ~ GET ~ data', id, data)
    }

    return Response.json({ data, error: !data ? 'Post not found' : false }, { status: 200 });
  } catch (error) {
    return Response.json({ data: null, error: error }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
   
  const req: IPostRequest = await request.json() 
  const data = [ { b: 2 }]

  try {
    const createdPost = await prisma.post.create({
      data: {
        title: req.title,
        subtitle: req.subtitle,
        description: req.description,
        postTypeId: req.postTypeId,
      },
      include: {
        postType: true,
      },
    });

    const data = formatPost(createdPost);
    return Response.json({data, error: false}, { status: 200 })
  } catch (error) {
    return Response.json({data: null, error: error}, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  const req: IPostResponse = await request.json() 
  const data = [ { b: 2 }]

  try {
    const updatedPost = await prisma.post.update({
      where: {
        id: req.id,
      },
      data: {
        title: req.title,
        subtitle: req.subtitle,
        description: req.description,
        postTypeId: req.postTypeId,
      },
      include: {
        postType: true,
      },
    });

    const data = formatPost(updatedPost);
    return Response.json({data, error: false}, { status: 200 })
  } catch (error) {
    return Response.json({data: null, error: error}, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const req: IPostResponse = await request.json() 
  const data = [ { b: 2 }]

  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: req.id,
      },
    });

    const data = formatPost(deletedPost);
    return Response.json({data, error: false}, { status: 200 })
  } catch (error) {
    return Response.json({data: null, error: error}, { status: 500 })
  }
}