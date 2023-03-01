// import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Flex } from "components/Layout/Container/styles";
import { Container, Item } from "components/Posts/styles";
import { Data, ProjectsProps } from "lib/types";

export const Projects = () => {
  // const { data } = useSWR<Data>("/api/github", fetcher);

  return (
    <Container>
      <h3>Featured Projects</h3>
      
            <a
              href={"https://trojanhex.vercel.app/"}
              target="_blank"
              className="color-black"
              key={1}
              rel="noopener noreferrer"
            >
              <Item>
                <Flex>
                  <Flex>
                    <span className="item-number">{`1. `}</span>
                    <h4>Disaster Management Using Blockchain Technologies</h4>
                  </Flex>
                    
                  <span>Solidity, Web3.js, React.js</span>
                </Flex>
                <p>• Helped NDRF (Govt Organisation) by building a scalable solution for Managing Disasters in an efficient way. <br />
• Wrote the Smart Contract in Solidity to felicitate Authorization, Approval, Generation of Supplies, and Demands to increase
transparency and trust among various Stakeholders. <br />
• Implemented Push Notification over Telegram for Quick Update of Demands and Ground Situation. <br />
• Integrated Frontend with Smart Contract using Web3.js. <br /></p>
              </Item>
            </a>
            <a
              href={"https://metropolitianestate.netlify.app/"}
              target="_blank"
              className="color-black"
              key={2}
              rel="noopener noreferrer"
            >
              <Item>
                <Flex>
                  <Flex>
                    <span className="item-number">{`2. `}</span>
                    <h4>Metropolitian Estate - A Real Estate Website</h4>
                  </Flex>
                    
                  <span>React.js, Express.js, Node.js, MongoDB</span>
                </Flex>
                <p>• A Fullstack website based on a client-server architecture where the admin would be able to
publish his own real estate projects over it. <br />
• Used Node.js and Express.js to create REST APIs and used Mongoose to create a MongoDB database connection. <br />
• Integrated Frontend using React.js and used Several NPM Packages to generate a good user experience <br /></p>
              </Item>
            </a>
    </Container>
  );
};
