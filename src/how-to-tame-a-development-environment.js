import React from 'react';
import { Deck, Slide, Heading, Text, List, ListItem } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import styled from '@emotion/styled';

require('normalize.css');

const dragon = require('./assets/dragon.png');
const tail = require('./assets/tail.png');
const tailtip = require('./assets/tailtip.png');
const configs = require('./assets/config.png');

const theme = createTheme(
    {
        primary: '#FFFCEB',
        secondary: 'black',
        tertiary: 'black',
        quaternary: 'black',
    },
    {
        primary: {
            name: 'Crimson Text',
            googleFont: true,
            styles: ['400'],
        },
        secondary: 'Helvetica',
    },
);

const Visual = styled.img`
    position: absolute;
    top: 24px;
    right: 0;
`;

const Overline = styled.div`
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
`;

const Presentation = () => {
    return (
        <Deck theme={theme} progress="number" showFullscreenControl={false}>
            <Slide bgColor="primary">
                <img style={{ maxWidth: '700px' }} src={dragon} />
                <Heading
                    fit
                    size={1}
                    bold={false}
                    lineHeight={1}
                    textColor="secondary"
                >
                    How to tame a development environment
                </Heading>
            </Slide>
            <Slide bgColor="primary">
                <Heading size={4}>Topics</Heading>
                <br />
                <Text>What problems did we face</Text>
                <br />
                <Text>What we did to solve them</Text>
                <br />
                <Text>What we learned from it</Text>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={tail} />
                <div>
                    <Overline>What problems did we face?</Overline>
                    <Heading size={4} textAlign="left" margin="0 0 24px 0">
                        Brief timeline
                    </Heading>
                    <List>
                        <ListItem>2016 - jQuery/Twig codebase</ListItem>
                        <ListItem>
                            2017 - Started migrating to React and Typescript
                        </ListItem>
                        <ListItem>
                            2017 - Started testing the frontend codebase
                        </ListItem>
                        <ListItem>2018 - We built a component library</ListItem>
                        <ListItem>
                            2018 - Released several features built with react
                        </ListItem>
                        <ListItem>2019 - Adopted Graphql</ListItem>
                    </List>
                </div>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={tail} />
                <div>
                    <Overline>What problems did we face?</Overline>
                    <Heading size={4} textAlign="left">
                        How can we keep our javascript infrastructure
                        maintainable?
                    </Heading>
                    <Text textAlign="left" margin="36px 0 0 0">
                        Only 4 FTE for frontend
                    </Text>
                    <Text textAlign="left" margin="24px 0 0 0">
                        Multiple applications:
                        <br />- Backoffice
                        <br />- Storefront
                        <br />- Admin
                        <br />- CRM
                        <br />- Point-Of-Sale
                    </Text>
                    <Text textAlign="left" margin="24px 0 0 0">
                        Lots of configuration:
                        <br />- Test frameworks
                        <br />- Javascript bundlers
                        <br />- Linters
                        <br />- Codestyle
                        <br />- Typescript
                        <br />- CI
                    </Text>
                </div>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={tailtip} />
                <div>
                    <Overline>How we solved it</Overline>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Heading size={4} textAlign="left">
                                Share tooling using a monorepo
                            </Heading>
                            <List>
                                <ListItem margin="36px 0 0 0">
                                    <a
                                        target="_blank"
                                        href="https://github.com/lerna/lerna"
                                    >
                                        Lerna
                                    </a>
                                    &nbsp;with yarn workspaces
                                </ListItem>
                                <ListItem margin="36px 0">
                                    DevDependencies hoisted to root of repo
                                </ListItem>
                                <ListItem>
                                    Use process.env in configs to filter
                                    application
                                </ListItem>
                            </List>
                        </div>
                        <img
                            style={{ height: '750px', marginLeft: '24px' }}
                            src={configs}
                        />
                    </div>
                </div>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={tailtip} />
                <div>
                    <Overline>What we learned</Overline>
                    <Text>Be prepared to get hacky</Text>
                    <Text margin="36px 0">
                        Check out community configurations first <br />
                        (tsdx, cra, nextjs)
                    </Text>
                    <Text>Team size -> granularity</Text>
                </div>
            </Slide>
            {/* <Slide bgColor="primary">
                <Visual src={tailtip} />
                <Overline>What we did to solve them</Overline>

                <Text textAlign="left" margin="36px 0 0 0">
                    How can we keep our javascript infrastructure maintainable
                    with a small team?
                </Text>
                <Text textAlign="left" margin="36px 0 0 0">
                    How can we increase frontend velocity?
                </Text>
                <Text textAlign="left" margin="36px 0 0 0">
                    How can we prototype features parallel to backend?
                </Text>
            </Slide> */}
        </Deck>
    );
};

export default Presentation;
