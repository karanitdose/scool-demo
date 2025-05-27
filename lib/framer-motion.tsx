"use client"

import React from 'react'

/**
 * This is a wrapper file for the framer-motion library
 * to enable easy server component compatibility
 */
export const motion = {
  div: function MotionDiv(props: any) {
    const { children, ...rest } = props;
    return <div {...rest}>{children}</div>;
  },
  h1: function MotionH1(props: any) {
    const { children, ...rest } = props;
    return <h1 {...rest}>{children}</h1>;
  },
  h2: function MotionH2(props: any) {
    const { children, ...rest } = props;
    return <h2 {...rest}>{children}</h2>;
  },
  p: function MotionP(props: any) {
    const { children, ...rest } = props;
    return <p {...rest}>{children}</p>;
  },
  span: function MotionSpan(props: any) {
    const { children, ...rest } = props;
    return <span {...rest}>{children}</span>;
  },
  a: function MotionA(props: any) {
    const { children, ...rest } = props;
    return <a {...rest}>{children}</a>;
  },
  button: function MotionButton(props: any) {
    const { children, ...rest } = props;
    return <button {...rest}>{children}</button>;
  },
  img: function MotionImg(props: any) {
    return <img {...props} />;
  },
  ul: function MotionUl(props: any) {
    const { children, ...rest } = props;
    return <ul {...rest}>{children}</ul>;
  },
  li: function MotionLi(props: any) {
    const { children, ...rest } = props;
    return <li {...rest}>{children}</li>;
  },
};