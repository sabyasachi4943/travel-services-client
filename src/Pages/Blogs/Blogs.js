import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
  return (
    <div className="m-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1. Difference between SQL and NoSQL?
          </Accordion.Header>
          <Accordion.Body>
            SQL stands for 'Structured Query Language'. It is the most common
            programming language used for executing queries, and handling data
            by using CRUD (create, read, update and delete) operation on a
            Relational Database Management System (RDMS) like MySQL, PostgreSQL,
            etc. <br />
            NoSQL stands for 'Not-Only SQL'. These types of databases are
            Non-Relational or non-tabular. A No-SQL database does not require a
            specific schema and hence is schema-less, and all the
            entries/documents are JSON documents. Examples : MongoDB, DynamoDB,
            Redis, etc.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. What is JWT, and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. What is the difference between javascript and NodeJS?
          </Accordion.Header>
          <Accordion.Body>
            1. NodeJS : NodeJS is a cross-platform and open source Javascript
            runtime environment that allows the javascript to be run on the
            server-side. Nodejs allows Javascript code to run outside the
            browser. Nodejs comes with a lot of modules and mostly used in web
            development. <br /> 2. JavaScript : Javascript is a Scripting
            language. It is mostly abbreviated as JS. It can be said that
            Javascript is the updated version of the ECMA script. Javascript is
            a high-level programming language that uses the concept of Oops but
            it is based on prototype inheritance.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. How does NodeJS handle multiple requests at the same time?
          </Accordion.Header>
          <Accordion.Body>
            NodeJS server uses an EventQueue, which queues incoming client
            requests and an EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded and
            acts as a listener for the EventQueue which processes incoming
            requests based on FIFO policy. When a new request comes in, NodeJS
            checks if it requires any blocking IO operations, if not, the
            EventLoop processes it and sends the response back to the client
            directly. If yes, then the request is forwarded to the thread
            manager, which then based on an algorithm, picks up an idle thread
            from the pool and lets it process the request. After completion of
            the request processing operation, the thread, returns the response
            back to the EventLoop which is then forwarded to the client. Thus,
            even if an incoming request needs blocking IO, the thread pool
            allows it to run asynchronously in the background without blocking
            the EventLoop and it gives a seamless experience of NodeJS handling
            multiple incoming requests concurrently without any persistent
            delays or bottlenecks.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
