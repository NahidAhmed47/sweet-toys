import React from "react";
import setTitle from "../../../utls/ControlTitle/setTitle";

const Blogs = () => {
  setTitle("Blogs");
  return (
    <div className="min-h-[50vh] my-10 md:mt-24 max-w-[900px] mx-auto">
      <div className="space-y-4">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-primary bg-base-100 rounded-box "
        >
          <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              1. Access Token: An access token is a credential that is used to
              authenticate and authorize a user when making requests to access
              protected resources on a server. It is typically a JSON Web Token
              (JWT) that contains encoded information about the user and their
              permissions. The access token has an expiration time and is
              generally short-lived.
              <br /> <br />
              2. Refresh Token: A refresh token is a long-lived credential that
              is used to obtain a new access token after the current one
              expires. It is securely stored on the client-side and sent to the
              server to request a fresh access token when needed. Refresh tokens
              are typically associated with longer expiration times and can be
              used to maintain the user's session and avoid frequent
              authentication.
            </p>
            <p className="mt-3">
              <span className="font-semibold">
                Storing them on the client-side:
              </span>{" "}
              Both the access token and refresh token should be stored securely
              on the client-side. Here are some common approaches:
              <br />
              1. Access Token: The access token is typically stored in memory
              (e.g., a JavaScript variable) or in a client-side storage
              mechanism like browser cookies or local storage. Storing it in
              memory is generally recommended to reduce the risk of token theft
              from storage mechanisms.
              <br />
              2. Refresh Token: The refresh token is more sensitive and should
              be stored securely. It is usually stored in an HTTP-only cookie to
              prevent access by client-side JavaScript. This helps protect
              against cross-site scripting (XSS) attacks. Alternatively, it can
              be stored in secure client-side storage mechanisms with
              appropriate precautions.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-primary bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p>
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, graph, or wide-column stores.
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-primary bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p>
            Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-primary bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p>
            Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
