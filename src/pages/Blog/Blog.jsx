

const Blog = () => {
    return (
        <div className="min-h-screen  py-8 px-4 bg-base-300">
      <h1 className="text-4xl font-bold mb-10  text-center">Frequently Asked Questions</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold mb-5">Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
          <p className="text-gray-800">A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. <br /> The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <br />
          I can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-5">Question 2: Compare SQL and NoSQL databases?</h2>
          <p className="text-gray-800">
           SQL: <br />
           These databases have fixed or static.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable. <br />
           NOSQL: <br />
           Non-relational or distributed database system.They have a dynamic schema. hierarchical data storage.	These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.	Horizontally scalable.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-5">Question 3: What is express js? What is Nest JS?</h2>
          <p className="text-gray-800">
           Express JS: <br />
           Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
           Nest JS: <br />
           Nest js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-5">Question 4: What is MongoDB aggregate and how does it work?</h2>
          <p className="text-gray-800">
          Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. <br />
          Aggregate works by taking the scoreline from one soccer game between two teams and adding it to the scoreline of another game between those same two teams. The combined scoreline from those two games is the aggregate scoreline or the score “on aggregate”.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Blog;