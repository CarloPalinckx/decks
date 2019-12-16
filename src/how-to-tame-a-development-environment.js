import React from 'react';
import {
    Deck,
    Slide,
    Heading,
    Text,
    List,
    ListItem,
    Notes,
    Appear,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import styled from '@emotion/styled';

require('normalize.css');

const dragon = require('./assets/dragon.png');
const tail = require('./assets/tail.png');
const wing = require('./assets/wing.png');
const tailtip = require('./assets/tailtip.png');
const configs = require('./assets/config.png');
const tsdx = require('./assets/tsdx.svg');
const next = require('./assets/next.svg');
const cra = require('./assets/cra.svg');
const sb_1 = require('./assets/sb_1.png');
const sb_2 = require('./assets/sb_2.png');

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
    top: 0;
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
                <Notes>
                    De onzichtbare prijs van moderne javascript, en hoe je die
                    temt.
                    <br />
                    Ik ga niet teveel in op implementatie details, ik ga niet
                    een hele webpack config doornemen
                    <br />
                </Notes>
            </Slide>
            <Slide bgColor="primary">
                <Appear>
                    <div>
                        <Heading size={4}>The problems we faced 🐉</Heading>
                        <br />
                    </div>
                </Appear>
                <Appear>
                    <div>
                        <Heading size={4}>How we solved them 🐉 🤺</Heading>
                        <br />
                    </div>
                </Appear>
                <Appear>
                    <div>
                        <Heading size={4}>What we learned from it 📖</Heading>
                    </div>
                </Appear>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={tail} />
                <div>
                    <Overline>What problems did we face?</Overline>
                    <Heading size={4} textAlign="left" margin="0 0 24px 0">
                        Once upon a time...
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
                        Multiple applications
                    </Text>
                    <Text textAlign="left" margin="24px 0 0 0">
                        Lots of configuration
                    </Text>
                </div>
                <Notes>
                    Configurations:
                    <br />- Test frameworks
                    <br />- Javascript bundlers
                    <br />- Linters
                    <br />- Codestyle
                    <br />- Typescript
                    <br />- CI
                    <br />
                    <br />
                    Applications:
                    <br />- Backoffice
                    <br />- Storefront
                    <br />- Admin
                    <br />- CRM
                    <br />- Point-Of-Sale
                </Notes>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={tail} />
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
                                    Hoisted dependencies
                                </ListItem>
                                <ListItem>
                                    Use process.env to filter configuration
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
                <Visual src={tail} />
                <div style={{ display: 'flex' }}>
                    <div>
                        <Heading size={4} textAlign="left">
                            What we learned
                        </Heading>
                        <br />
                        <Text textAlign="left">Be prepared to get hacky</Text>
                        <Text margin="36px 0" textAlign="left">
                            Community configurations
                            <br />
                        </Text>
                        <Text textAlign="left">Team size -> granularity</Text>
                    </div>
                    <div
                        style={{
                            marginLeft: '64px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <img src={cra} />
                        <br />
                        <img src={next} width="150px" />
                        <br />
                        <img width="150px" src={tsdx} />
                    </div>
                </div>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={wing} />
                <Overline>What problems did we face?</Overline>
                <Heading size={4} textAlign="left">
                    How can we increase velocity?
                </Heading>
                <Text textAlign="left" margin="36px 0 0 0">
                    Manual labour
                </Text>
                <Text textAlign="left" margin="36px 0 0 0">
                    Slow checks
                </Text>
                <Text textAlign="left" margin="36px 0 0 0">
                    Failing checks in reviews
                </Text>
                <Notes>
                    Manual labour: Reproducing app state
                    <br />
                    Shorter feedback loop on checks
                </Notes>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={wing} />
                <Overline>How did we solve them?</Overline>
                <Heading size={4} textAlign="left" margin="36px 0 0 0">
                    Use a "development UI" like storybook
                </Heading>
                <Text margin="36px 0 24px 0" textAlign="left">
                    Define multiple states per component.
                </Text>
                <Text margin="36px 0 0 0" textAlign="left">
                    Develop components in isolation
                </Text>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '48px',
                    }}
                >
                    <img style={{ marginRight: '12px' }} src={sb_1} />
                    ➡️
                    <img style={{ marginLeft: '12px' }} src={sb_2} />
                </div>
            </Slide>
            <Slide>
                <Visual src={wing} />
                <Overline>How did we solve them?</Overline>
                <Heading size={4} textAlign="left">
                    Only run checks on staged code
                </Heading>
                <Text margin="36px 0 24px 0" textAlign="left">
                    Only changed files get checked
                </Text>
                <Text textAlign="left">Checks no longer fail in CI</Text>
                <br />
                <Heading size={4} textAlign="left" margin="36px 0 0 0">
                    Generate typescript types for GraphQL
                </Heading>
                <Text margin="36px 0 24px 0" textAlign="left">
                    No more writing/maintaining types by hand
                </Text>
                <Notes>
                    Gamedev use development UI's all the time
                    <br />
                    Feedback loop on checks is faster, no more extra reviews
                    required.
                </Notes>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={wing} />
                <Heading size={4} textAlign="left">
                    What we learned
                </Heading>
                <Text margin="36px 0 24px 0" textAlign="left">
                    "Development UI" helps your filestructure stay flat
                </Text>
                <Text margin="0 0 24px 0" textAlign="left">
                    States of components can be used in tests
                </Text>
                <Text margin="0 0 24px 0" textAlign="left">
                    DX is a personal preference
                </Text>
                <Notes>Storybook can introduce fake hierarchy better</Notes>
            </Slide>
            <Slide bgColor="primary">
                <Visual src={tailtip} />
                <Overline>What problems did we face?</Overline>
                <Heading size={4} textAlign="left">
                    Can we work parallel to backend?
                </Heading>
                <Text textAlign="left" margin="36px 0 0 0">
                    Lots of dependencies for planning development
                </Text>
                <Text textAlign="left" margin="36px 0 0 0">
                    Prototyping was hard
                </Text>
                <Text textAlign="left" margin="36px 0 0 0"></Text>
            </Slide>
            <Slide>
                <Visual src={tailtip} />
                <Overline>How did we solve them?</Overline>
                <Heading size={4} textAlign="left">
                    Run a seperate mocking server
                </Heading>
                <Text margin="36px 0 24px 0" textAlign="left">
                    Generate types without backend
                </Text>
                <Text margin="36px 0 24px 0" textAlign="left">
                    Try out a schema before building it
                </Text>
                <Notes></Notes>
            </Slide>
            <Slide>
                <Visual src={tailtip} />
                <Heading size={4} textAlign="left">
                    What we learned
                </Heading>
                <Text margin="36px 0 24px 0" textAlign="left">
                    Lacking mocking documentation (apollo)
                </Text>
                <Text margin="36px 0 24px 0" textAlign="left">
                    Document your schema changes well
                </Text>
            </Slide>
        </Deck>
    );
};

export default Presentation;
