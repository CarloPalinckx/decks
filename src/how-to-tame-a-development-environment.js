import React from 'react';
import { Deck, Slide, Heading } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const dragon = require('./assets/dragon.png');

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

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck theme={theme}>
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
            </Deck>
        );
    }
}
