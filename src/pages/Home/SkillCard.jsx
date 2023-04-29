import React from "react";

const SkillCard = () => {
  return (
    <div className="m-5 py-10 md:flex justify-center items-center">
      <div className="card w-96 mx-5  bg-gray-700 text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">Grammar</h2>
          <p>
            The only way to learn and improve your English grammar is through
            practice.
          </p>
        </div>
      </div>
      <div className="card w-96 mx-5 mt-5 md:mt-0 bg-gray-700 text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">Vocabulary</h2>
          <p>
            The depth of vocabulary shows English proficiency and the overall
            level of education.
          </p>
        </div>
      </div>
      <div className="card w-96 mx-5 mt-5 md:mt-0 bg-gray-700 text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">Speaking</h2>
          <p>
            Improve your English fluency by actually speaking the words and
            making sentences.
          </p>
        </div>
      </div>
      <div className="card w-96 mx-5 mt-5 md:mt-0 bg-gray-700 text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">Writing</h2>
          <p>
            Writing is one of the essential components of learning any language
            professionally.
          </p>
        </div>
      </div>
      <div className="card w-96 mx-5 mt-5 md:mt-0 bg-gray-700 text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl">Reading</h2>
          <p>
            Reading is one of the first English language skills you must acquire
            on your journey to English fluency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
