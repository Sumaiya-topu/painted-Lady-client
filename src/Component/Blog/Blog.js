import React from 'react';
import blogImg from '../../assets/images/Difference-between-SQL-and-NOSQL-2.png'
import './Blog.css';

const Blog = () => {
    return (
        <div className='  blog lg:p-5'>
            <div className=' w-11/12 mx-auto mb-10 p-10 shadow-xl shadow-xl'>
                <h1 className='text-3xl text-rose-500 font-semibold py-5  '>What is JWT? and How does it work?</h1>
                <p className='text-justify'>JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.
                    <br />
                    <br />
                    <span className='text-rose-500 font-semibold'>How JWT works :</span><br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you will get two JSON strings:

                    The header and the payload.
                    The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </div>
            <div className='w-11/12 mx-auto my-5 p-10 shadow-lg shadow-xl'>
                <h1 className='text-3xl text-rose-500 font-semibold pb-5'>Difference between SQL and NoSQL :</h1>
                <img className='mx-auto ' src={blogImg} alt="" />
            </div>

            <div className='w-11/12 mx-auto mt-10 p-10 shadow-lg shadow-xl'>
                <h1 className='text-3xl text-rose-500 font-semibold pb-5 '>What is the difference between javascript and NodeJS?</h1>
                <p className='text-justify'>1.
                    Javascript is a programming language that is used for writing scripts on the website.
                    NodeJS is a Javascript runtime environment. <br /> <br />
                    2.	Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS. <br /> <br />
                    3.	It is basically used on the client-side.	It is mostly used on the server-side. <br /> <br />
                    4.	Javascript is capable enough to add HTML and play with the DOM.
                    Nodejs does not have capability to add HTML tags. <br /> <br />
                    5.	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br /> <br />
                    V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                    <br /> <br />
                    6.	Javascript is used in frontend development.	Nodejs is used in server-side development.
                    <br /> <br />
                    7.	Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                    Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                    <br /> <br />
                    8.	It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                    Nodejs is written in C, C++ and Javascript.
                </p>
            </div>
            <div className='w-11/12 mx-auto p-10 shadow-lg  shadow-xl'>
                <h1 className='text-3xl text-rose-500 font-semibold py-5 '>How does NodeJS handle multiple requests at the same time?</h1>
                <p className=' text-justify '>1.
                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                </p>
            </div>

        </div>
    );
};

export default Blog;