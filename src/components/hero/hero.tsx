import React, { Component, ReactNode } from 'react';
import { Document } from '@contentful/rich-text-types';
import RichText from './../richText/richText';

import './hero.scss';

export default class Hero extends Component {

    public props: HeroProps;

    public render(): ReactNode {
        const { config } = this.props;

        return (
            <div className="hero-container container">
                <div className="row">
                    <div className="col">
                        <h1>{ config.heading }</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h4 className="date">{ config.conferenceDate }</h4>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h4 className="time">{ config.startTime } - { config.endTime }</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="subheading">{ config.subheading }</p>
                    </div>
                </div>
                <div className="row">
                    {
                        config.primaryButtonRichText || config.secondaryButtonRichText ?
                            <div className="button-column col-sm-12 col-md-10 offset-md-1 col-lg-3 offset-lg-2">
                                {
                                    config.primaryButtonRichText ?
                                        <div
                                            className="primary col-10 offset-1 col-sm-6 offset-sm-0 col-lg-12">
                                            <RichText richText={ config.primaryButtonRichText } />
                                        </div> : undefined
                                }
                                {
                                    config.secondaryButtonRichText ?
                                        <div
                                            className="secondary col-10 offset-1 col-sm-6 offset-sm-0 col-lg-12">
                                            <RichText richText={ config.secondaryButtonRichText } />
                                        </div> : undefined
                                }
                            </div> : null
                    }
                    <div className="d-none d-sm-block col-md-10 offset-md-1 col-lg-5 offset-lg-0">
                        <p className="description">{ config.description }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export type HeroConfig = {
    heading: string;
    subheading: string;
    conferenceDate: string;
    startTime: string;
    endTime: string;
    description: string;
    primaryButtonRichText: Document;
    secondaryButtonRichText: Document;
};

export type HeroProps = {
    className?: string;
    config: HeroConfig;
};