import RetroGrid from "@/components/misc/retro-grid";
import { ProductsBeam } from "./components/products-beam";

export default function AboutPage() {
  return (
    <main>
      <div className="relative flex h-96 w-full items-center justify-center overflow-hidden  bg-background p-20 bg-zinc-100 dark:bg-zinc-900">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#808080] via-[#a9a9a9] to-[#d3d3d3] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent">
          Leveraging innovation, research, and experience <br />
          to break technological barriers and build a smarter tomorrow.
        </span>
        <RetroGrid />
      </div>
      <div className="max-w-7xl mx-auto py-20 px-5 ">
        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">Who We Are?</h2>
          <p className="text-muted-foreground">
            We were founded in 2022 by a team of two passionate engineers, and
            have since grown to include 10 creative designers. We saw an
            opportunity to create products that would solve real-world problems
            by developing innovative solutions across a range of fields. Our
            expertise spans across multiple fields, including home automation,
            IoT, entertainment, real-time FPGA and ASIC-based solutions,
            embedded applications, cloud solutions, web development, app
            development, and software development.
          </p>
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            At Meistergen Technologies, our mission is to empower industries
            with cutting-edge Electrical Resistivity Tomography (ERT) and
            geophysical analysis tools. We strive to provide innovative software
            solutions that enhance decision-making, optimize operations, and
            drive efficiency in the geophysical sector.
          </p>
          <h2 className="text-xl font-semibold">
            What is ERT and Geophysical Analysis?
          </h2>
          <h3 className="font-medium">
            Electrical Resistivity Tomography (ERT)
          </h3>
          <p className="text-muted-foreground">
            ERT is a geophysical method used to image subsurface structures by
            measuring the electrical resistivity of the ground. It involves
            injecting electrical currents into the ground and measuring the
            resulting potential differences. The data collected is then used to
            create detailed images of subsurface features, which can reveal
            information about the composition, structure, and properties of the
            soil and rock layers. ERT is widely used in environmental studies,
            hydrogeology, mineral exploration, and civil engineering to detect
            and characterize subsurface anomalies such as groundwater,
            contamination plumes, and mineral deposits.
          </p>
          <h3 className="font-medium">Geophysical Analysis</h3>
          <p className="text-muted-foreground">
            Geophysical analysis encompasses a range of techniques used to study
            the physical properties of the Earth. By interpreting data from
            various sources, such as seismic waves, magnetic fields, and
            gravitational fields, geophysicists can infer the composition and
            structure of the subsurface. These techniques are crucial in
            exploring natural resources, assessing environmental impacts, and
            supporting engineering projects. Geophysical analysis provides
            valuable insights that guide decision-making and risk management in
            diverse fields, including oil and gas exploration, mining, and
            environmental conservation.
          </p>
        </section>
        <ProductsBeam />
        <section className="space-y-5">
          <h2 className="text-xl font-semibold">
            Why Choose GeoSoft Solutions?
          </h2>
          <ul className="text-muted-foreground">
            <li>
              <strong>Innovative Technology:</strong> We leverage the latest
              advancements in technology to provide powerful and user-friendly
              software.
            </li>
            <li>
              <strong>Expert Team:</strong> Our team comprises seasoned
              professionals with deep expertise in ERT and geophysical analysis.
            </li>
            <li>
              <strong>Customer-Centric Approach:</strong> We prioritize our
              clients’ needs, offering personalized support and solutions
              tailored to their specific requirements.
            </li>
            <li>
              <strong>Proven Track Record:</strong> We have a history of
              successful deployments across various sectors, delivering tangible
              results and value to our clients.
            </li>
          </ul>

          <h3 className="text-xl font-semibold">Our Values</h3>
          <ul className="text-muted-foreground">
            <li>
              <strong>Integrity:</strong> We conduct our business with the
              highest ethical standards, ensuring transparency and trust.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously innovate to stay
              ahead of industry trends and provide our clients with the best
              tools available.
            </li>
            <li>
              <strong>Quality:</strong> We are committed to delivering
              high-quality products and services that meet the highest standards
              of excellence.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in the power of
              collaboration, working closely with our clients to achieve mutual
              success.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
