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
const git_hooks = require('./assets/git_hooks.gif');
const types = require('./assets/types.gif');

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
                    Ons avontuur van het migreren naar een moderne js stack.
                    Oftewel: Hoe tem je een ontwikkelomgeving
                    <br />
                    <br />
                    Ik ga niet teveel in op implementatie details, ik ga geen
                    webpack config doornemen. Dan zijn we hier volgende week nog
                    😅
                </Notes>
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
                        <ListItem>
                            2018 - We built a component library (Bricks)
                        </ListItem>
                        <ListItem>
                            2018 - Released several features built with react
                        </ListItem>
                        <ListItem>2019 - Adopted Graphql</ListItem>
                    </List>
                </div>
                <Notes>
                    Slides in het engels, wist niet zeker of er ook engelse
                    developers zouden komen.
                    <br />
                    <br />
                    Hoe begon ons avontuur:
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
                    <Heading size={4} textAlign="left">
                        How can we keep our javascript infrastructure
                        maintainable?
                    </Heading>
                    <ul>
                        <li>
                            <Text textAlign="left">Only 4 frontenders</Text>
                        </li>
                        <li>
                            <Text textAlign="left">Multiple applications</Text>
                        </li>
                        <li>
                            <Text textAlign="left">Lots of configuration</Text>
                        </li>
                    </ul>
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
                            <ul>
                                <li>
                                    <Text textAlign="left">
                                        <a
                                            target="_blank"
                                            href="https://github.com/lerna/lerna"
                                        >
                                            Lerna
                                        </a>
                                        &nbsp;with yarn workspaces
                                    </Text>
                                </li>
                                <li>
                                    <Text textAlign="left">
                                        Hoisted dependencies
                                    </Text>
                                </li>
                                <li>
                                    {' '}
                                    <Text textAlign="left">
                                        Use process.env to filter configuration
                                    </Text>
                                </li>
                            </ul>
                        </div>
                        <img
                            style={{ height: '750px', marginLeft: '24px' }}
                            src={configs}
                        />
                    </div>
                </div>
                <Notes>Monorepo</Notes>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={tail} />
                <div style={{ display: 'flex' }}>
                    <div>
                        <Heading size={4} textAlign="left">
                            What we learned
                        </Heading>
                        <ul>
                            <li>
                                <Text textAlign="left">
                                    Be prepared to get hacky
                                </Text>
                            </li>
                            <li>
                                <Text textAlign="left">
                                    Community configurations
                                </Text>
                            </li>
                            <li>
                                <Text textAlign="left">
                                    Team size -> granularity
                                </Text>
                            </li>
                        </ul>
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
                <ul>
                    <li>
                        <Text textAlign="left">Manual labour</Text>
                    </li>
                    <li>
                        <Text textAlign="left">Slow checks</Text>
                    </li>
                    <li>
                        <Text textAlign="left">Failing checks in reviews</Text>
                    </li>
                </ul>
                <Notes>
                    Handwerk: Reproduceren van bepaalde situaties in je
                    applicatie. <br />
                    <br />
                    Naar een winkel ->
                    <br />
                    Product ->
                    <br />
                    Winkelwagen ->
                    <br />
                    Checkout
                </Notes>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={wing} />
                <Overline>How did we solve them?</Overline>
                <Heading size={4} textAlign="left" margin="36px 0 0 0">
                    Use a "development UI" like storybook
                </Heading>
                <ul>
                    <li>
                        <Text textAlign="left">
                            Define multiple states per component.
                        </Text>
                    </li>
                    <li>
                        <Text textAlign="left">
                            Develop components in isolation
                        </Text>
                    </li>
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
                </ul>
            </Slide>
            <Slide>
                <Visual src={wing} />
                <Overline>How did we solve them?</Overline>
                <Heading size={4} textAlign="left">
                    Only run checks on staged code
                </Heading>
                <ul>
                    <li>
                        <Text margin="36px 0 24px 0" textAlign="left">
                            Uses{' '}
                            <a href="https://github.com/okonet/lint-staged">
                                lint-staged
                            </a>{' '}
                            and{' '}
                            <a href="https://github.com/typicode/husky">
                                husky
                            </a>
                        </Text>
                    </li>
                    <li>
                        <Text margin="0 0 24px 0" textAlign="left">
                            Only changed files get checked
                        </Text>
                    </li>
                    <li>
                        <Text textAlign="left">
                            Shorter feedback loop on checks
                        </Text>
                        <div style={{ display: 'flex', marginTop: '36px' }}>
                            <img src={git_hooks} />
                        </div>
                    </li>
                </ul>
            </Slide>
            <Slide>
                <Visual src={wing} />
                <Heading size={4} textAlign="left" margin="36px 0 0 0">
                    Generate typescript types for GraphQL
                </Heading>
                <ul>
                    <li>
                        <Text margin="36px 0 24px 0" textAlign="left">
                            No more writing/maintaining types by hand
                        </Text>
                    </li>
                </ul>
                <div style={{ display: 'flex', marginTop: '36px' }}>
                    <img src={types} />
                </div>
                <Notes>Also faster feedback loop. Generator warns you</Notes>
            </Slide>
            <Slide bgColor="primary" align="flex-start center">
                <Visual src={wing} />
                <Heading size={4} textAlign="left">
                    What we learned
                </Heading>
                <ul>
                    <li>
                        <Text margin="36px 0 24px 0" textAlign="left">
                            "Development UI" helps your filestructure stay flat
                        </Text>
                    </li>
                    <li>
                        <Text margin="0 0 24px 0" textAlign="left">
                            States of components can be used in tests
                        </Text>
                    </li>
                    <li>
                        <Text margin="0 0 24px 0" textAlign="left">
                            Developer Experience is a personal preference
                        </Text>
                    </li>
                </ul>
                <Notes>
                    Storybook can introduce fake hierarchy better
                    <br />
                    Persoonlijke voorkeur -> Configuratie om je configuraties te
                    configureren. I heard you liked configs
                </Notes>
            </Slide>
            <Slide bgColor="primary">
                <Visual src={tailtip} />
                <Overline>What problems did we face?</Overline>
                <Heading size={4} textAlign="left">
                    Can we work parallel to backend?
                </Heading>
                <ul>
                    <li>
                        <Text textAlign="left">
                            Lots of dependencies for planning development
                        </Text>
                    </li>
                    <li>
                        <Text textAlign="left">Prototyping was hard</Text>
                    </li>
                </ul>
            </Slide>
            <Slide>
                <Visual src={tailtip} />
                <Overline>How did we solve them?</Overline>
                <Heading size={4} textAlign="left">
                    Run a seperate mocking server
                </Heading>
                <ul>
                    <li>
                        <Text textAlign="left">
                            Generate types without backend
                        </Text>
                    </li>
                    <li>
                        <Text textAlign="left">
                            Try out a schema before building it
                        </Text>
                    </li>
                </ul>
                <Notes>3400 regels gegenereerd</Notes>
            </Slide>
            <Slide>
                <Visual src={tailtip} />
                <Heading size={4} textAlign="left">
                    What we learned
                </Heading>
                <ul>
                    <li>
                        <Text textAlign="left">
                            Lacking documentation on mocking (apollo)
                        </Text>
                    </li>
                    <li>
                        <Text textAlign="left">Schema ends up better</Text>
                    </li>
                    <li>
                        <Text textAlign="left">
                            Document your schema changes well!
                        </Text>
                    </li>
                </ul>
            </Slide>
            <Slide>
                <Heading size={4} textAlign="left">
                    Takeaways 🥡
                </Heading>
                <ul>
                    <li>
                        <Text textAlign="left">Tailor to your own team</Text>
                    </li>
                    <li>
                        <Text textAlign="left">Consider your "Customers"</Text>
                    </li>
                    <li>
                        <Text textAlign="left">Try making a business case</Text>
                    </li>
                </ul>
                <Notes>
                    Krijg je al volledig vertrouwen 👍, anders -> Business case
                </Notes>
            </Slide>
            <Slide>
                Twitter: @CarloPalinckx
                <br />
                GitHub: CarloPalinckx
                <br />
                <br />
                Blogs: <br />
                medium.com/myonlinestore
                <br />
                dev.to/myonlinestore
            </Slide>
        </Deck>
    );
};

export default Presentation;
