// import useSWR from "swr";
// import Link from "next/link";
// import fetcher from "lib/fetcher";
import { Data, PostsProps, StringProps } from "lib/types";
// import { convertToSlug, formatDate } from "lib/helpers";

import { Container, Item, PostsDescription } from "components/Posts/styles";
import { Flex } from "components/Layout/Container/styles";

export const Posts = ({ title }: StringProps) => {
  // const { data } = useSWR<Data>("/api/medium", fetcher);

  return (
    <Container>
      <h3>{title}</h3>
      {/* {data?.feed?.map((item: PostsProps, id: number) => {
        return (
          <Link href={`/blog/${convertToSlug(item.title)}`} key={id}>
            <Item>
              <Flex>
                <Flex>
                  <span className="item-number">{`${id < 9 ? "0" : ""}${
                    id + 1
                  }`}</span>
                  <h4>{item.title.substring(0, 65)}</h4>
                </Flex>
                <span>{formatDate(item.pubDate)}</span>
              </Flex>
              <PostsDescription
                dangerouslySetInnerHTML={{
                  __html: item.description.substring(0, 300) + "...",
                }}
              />
            </Item>
          </Link>
        );
      })} */}
      <div
              // href={"https://trojanhex.vercel.app/"}
              // target="_blank"
              className="color-black"
              key={1}
              // rel="noopener noreferrer"
            >
              <Item>
                <Flex>
                  <Flex>
                    <span className="item-number"></span>
                    <h4>Clamp - Software Development Engineer</h4>
                    <h4> - ( 12/22  -  Present )</h4>
                  </Flex>
                    </Flex>
                <h4>Solidity, ethers.js, React.js, Uniswap, Moralis, Node.js, Expres, MongoDBs</h4>
                <br />
                <p>• Working on a mission to help 1 billion users invest into crypto using digital asset indexes<br />
              • Created RESTful APIs using Node.js and Express.js.<br />
• Integrated Uniswap SDK for fetching optimal trading prices for users.  <br />
• Wrote secure smart contracts for creating digitl asset indexes.<br />
</p>
              </Item>
            </div>
            <div
              // href={"https://trojanhex.vercel.app/"}
              // target="_blank"
              className="color-black"
              key={1}
              // rel="noopener noreferrer"
            >
              <Item>
                <Flex>
                  <Flex>
                    <span className="item-number"></span>
                    <h4>QuadB Technologies - Backend Developer</h4>
                    <h4> - ( 01/22  -  04/22 )</h4>
                  </Flex>
                    </Flex>
                <h4>Solidity, ethers.js, React.js, Uniswap, Moralis, Node.js, Expres, MongoDBs</h4>
                <br />
                <p>• Worked on a Blockchain Project based on Play To Earn Model and made its Smart Contract in Solidity.
<br />
• Used Sequelize ORM to carry out MySQL queries and performed frontend integration with Smart Contract
using Web3.js and Ethers.js.
<br />
• Integrated games and wrote RESTFul APIs using Node.js and Express.js.
<br />
• Hosted backend on Digital Ocean Droplet using Nginx Server.<br /></p>
              </Item>
            </div>
    </Container>
  );
};
