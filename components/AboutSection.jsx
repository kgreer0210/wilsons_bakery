import React from "react";

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">About Us</h1>

      <section className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Our History
        </h2>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Started in the 1940&apos;s, Wilson&apos;s Bakery has been serving
          Warner Robins with fresh, handcrafted bakery items. From sweet
          breakfast pastries and donuts to cookies, cupcakes, and delectable
          cakes. Wilson&apos;s Bakery offers their customers a delicious array
          of baked goods with new flavors offered seasonally. One of our most
          famous sweets are the mouth-watering Fingernut Cookies! Made with rich
          butter and, of course, Georgia pecans, this cookie keeps customers
          coming back for more. If you haven&apos;t had one before, ask for a
          sample! Many generations have come to Wilson&apos;s Bakery for their
          special dessert and special event cakes, including wedding cakes. We
          are proud to be a part of our community and look forward to making you
          a part of the Wilson&apos;s Bakery Family.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          The Wilson Family
        </h2>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Wendy Wilson is a 2nd generation baker, growing up in the bakery
          business, right here are Wilson&apos;s Bakery. She is the third owner
          of the Wilson&apos;s Bakery, having purchased the bakery in 1989 from
          her parents. Wendy is not only the proud owner of Wilson&apos;s
          Bakery, but is the proud mother of beautiful twins, Ava and Aidan.
          Both her and the bakery are involved in many local charities and
          events. Wendy is also the President of the Southeastern Retail Bakers
          Association.
        </p>
      </section>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
        Wilson&apos;s Bakery in the News
      </h1>

      {/* Video section - stacked on mobile, side by side on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.youtube-nocookie.com/embed/oclz8UxX44c"
            title="YouTube video player 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.youtube-nocookie.com/embed/fenhE1GxFDc"
            title="YouTube video player 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* News articles - stacked on mobile, side by side on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Telegraph Article */}
        <div className="border-2 border-blue-900 p-3 sm:p-4 rounded-lg">
          <h2 className="text-lg sm:text-xl font-serif mb-2">
            Wilson&apos;s Bakery a Warner Robins institution
          </h2>

          <div className="flex flex-col sm:flex-row sm:gap-2 text-xs mb-3">
            <span className="font-bold">BY STACYE LEE</span>
            <span>For the Telegraph - July 26, 2009</span>
          </div>

          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <p>
              Donna Register held the white Wilson&apos;s Bakery box with both
              hands, as if it contained precious family gems; the fresh-baked
              doughnuts and apple fritter inside serving as sweet reminders of
              her childhood.
            </p>

            <p>
              &quot;My mom and dad used to come here and order our birthday
              cakes,&quot; said the 45-year-old Warner Robins resident.
              &quot;We&apos;ve been using this bakery forever.&quot;
            </p>

            <p>So what&apos;s so special about this bakery?</p>

            <p>
              &quot;The smell just hits you, it&apos;s like no other,&quot;
              Register said. &quot;And the taste. You can&apos;t find another
              doughnut that tastes like this anywhere.&quot;
            </p>
          </div>

          <div className="mt-3 sm:mt-4">
            <a
              href="http://www.macon.com/2009/07/26/789206/wilsons-bakery-a-warner-robins.html#storylink=cpy"
              className="text-xs sm:text-sm font-semibold hover:underline"
            >
              See more of this story
            </a>
          </div>
        </div>

        {/* Book Feature */}
        <div className="border-2 border-blue-900 p-3 sm:p-4 rounded-lg">
          <h2 className="text-lg sm:text-xl font-serif mb-2 italic">
            More Cotton, Cornbread and Conversations
          </h2>

          <h3 className="text-sm sm:text-base font-serif italic mb-2">
            50 New Adventures in Central Georgia (including Wilson&apos;s
            Bakery!)
          </h3>

          <p className="text-xs sm:text-sm mb-3">by Suzanne Lawler</p>

          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <p>
              Get ready to jump in the car, buckle your seat belt and head out
              all over Central Georgia.{" "}
              <span className="italic">
                More Cotton, Cornbread, and Conversations
              </span>{" "}
              is a second survey of some of the best places to visit in Central
              Georgia...
            </p>

            <p>
              Chef Audrey will challenge your taste buds with her sassy sauces
              and there&apos;s even a chapter for your four-footed best
              friend...
            </p>
          </div>

          <a
            href="http://www.mupress.org/productdetails.cfm?PC=235"
            className="inline-block mt-3 sm:mt-4 text-xs sm:text-sm font-semibold hover:underline"
          >
            Buy the Book - Click Here
          </a>
        </div>
      </div>
    </div>
  );
}
