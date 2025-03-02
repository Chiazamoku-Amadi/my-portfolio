import { recommendations } from "../constants";

const Recommendations = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Recommendations</h3>

      <div className="client-container">
        {recommendations.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <div>
              <div className="flex self-end items-center gap-2 mb-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    src="/assets/star.png"
                    alt="star"
                    className="h-3 w-3"
                  />
                ))}
              </div>

              <p className="text-white font-light">{review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-full h-12 w-12"
                  />

                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-sm md:text-base text-white-500 font-light">
                      {position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
