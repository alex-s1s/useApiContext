import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'
import Card from "../Card";

export interface apiProps {
    id: string;
    title: string;
    body: string;
}

const ListText = (props: { data: any; }) => {
  const posts = props.data;

  return (
    <Card>
      <UnorderedList>
        {posts?.map((post: apiProps ) => (
          <ListItem key={post.id}>
            <Link 
              href={{
                pathname: "showList/[id]",
                query: { id: post.id },
              }}
            >
              <a >{post.title}</a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Card>
  );
};

export default ListText;

