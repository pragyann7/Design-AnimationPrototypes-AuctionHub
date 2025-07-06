// ScrollFadeIn.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollFadeIn({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {children}
        </motion.div>

    );
}



// import ScrollFadeIn from "../components/ScrollFadeIn";

// function App() {
//   function Content() {
//     return (
//       <div className="px-8 max-w-3xl mx-auto py-20 space-y-10">
//         <ScrollFadeIn>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cupiditate, voluptatum aliquid eveniet esse omnis illum magni obcaecati cumque id minima fugiat tenetur ipsam illo quos ab ipsum, fuga distinctio!
//             Quia provident iusto autem beatae deleniti, possimus quaerat eaque vitae aperiam adipisci. Ullam, aliquid ad. Ut maxime, eveniet aut est impedit accusantium facilis voluptas voluptates accusamus voluptatibus obcaecati harum repellendus.
//             Repellendus molestiae ex, blanditiis laboriosam a perferendis excepturi, ipsa optio quo eos pariatur laudantium reiciendis tenetur voluptas at, saepe rem. Quod repellat rerum numquam perspiciatis deserunt fugiat fugit corrupti reprehenderit.
//             Exercitationem, in expedita dolorem, debitis veniam quibusdam enim pariatur rerum deleniti autem consequuntur, veritatis earum? Necessitatibus commodi blanditiis est excepturi nostrum adipisci molestias omnis sequi? Quam necessitatibus cumque commodi molestiae.
//             Repudiandae culpa facere porro ipsam saepe. Eius architecto ipsam, repellendus non voluptatum quia optio. Ex nostrum perspiciatis magni! Similique numquam, voluptates nisi commodi reprehenderit impedit minima eius aliquam aut tempora.
//             Dignissimos consequatur harum sapiente quam, aspernatur error consectetur asperiores eius, officia odio itaque cumque dicta! Quam iusto fuga dolores. Vero, numquam? Voluptates a error hic maxime culpa quis amet dolorum.
//             Cupiditate eum doloremque voluptas eius vero in esse, molestiae nostrum asperiores excepturi beatae unde! Voluptatibus ratione a atque voluptatum nemo laudantium aperiam veniam dolor, praesentium necessitatibus, doloremque, natus explicabo labore.
//             Incidunt, inventore dolorem ut fugiat at pariatur accusamus sapiente nihil. Illum dolor, id vel doloremque amet eum voluptate nostrum laborum architecto aliquam deleniti accusamus cumque esse alias at sunt? Maxime.
//             Architecto saepe totam itaque vitae eos iusto quos ex, reiciendis eius ab vero? Sunt, distinctio. Voluptas, nisi mollitia. Quis quibusdam voluptates eaque sequi assumenda corrupti laboriosam, quisquam nihil pariatur natus?
//             Odit, fugiat perferendis? Nobis porro doloribus dicta error inventore veritatis autem, iste ut facere consequatur nesciunt repellendus ipsum saepe asperiores facilis molestiae ullam rerum laudantium aut soluta. Animi, quos blanditiis?
//             Non, dolorum? Expedita recusandae autem earum optio eaque porro. Laborum deserunt aliquid facilis nemo optio sapiente velit est soluta veniam. Velit soluta ex recusandae similique esse eos, dolor eius tempora.
//             Optio maxime dolore, a suscipit quaerat modi iure illum. Assumenda at consectetur recusandae labore, velit praesentium quo enim id quam dolores architecto, itaque iste odit officiis perspiciatis nihil, expedita reprehenderit.
//             Iste, reprehenderit, laudantium nostrum, nemo maxime dolor officia accusamus consequatur repudiandae doloremque error temporibus labore ipsum totam obcaecati. Fugit molestias dolor voluptate maxime. Maiores suscipit officiis natus minima impedit tempore.
//             Nostrum quaerat quia perferendis officia iure! Et beatae natus veniam, cum reiciendis corrupti laudantium, neque numquam quis ipsum impedit, commodi est veritatis enim voluptatem illum necessitatibus possimus quo hic architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas eos, natus distinctio eaque maxime ex nulla voluptates incidunt delectus dolorem debitis expedita blanditiis reiciendis assumenda fugit obcaecati inventore saepe.
//             Esse nobis minus fugit assumenda dolorum consequuntur non. Dolor dignissimos sunt rem repellat aut eius id eaque voluptatibus repellendus cum quibusdam minus non dolorum, aliquid voluptates inventore eum maiores laudantium?
//             Et laborum sed accusamus, eos rerum hic dignissimos mollitia quaerat officiis nam magnam quae sequi non quasi ex molestiae repellat? Natus obcaecati quam atque non officiis voluptatum soluta a sunt?
//             Eos a recusandae quam laborum laboriosam amet repudiandae error minima unde, commodi explicabo tempora sed veritatis blanditiis temporibus sapiente fugiat est totam minus officiis quidem cum. Exercitationem quibusdam ea cum.
//             Iste explicabo soluta exercitationem temporibus sit vero, doloribus totam magni ut tempora distinctio eos ducimus aut illo facilis vitae tenetur fugit optio nihil. Modi laborum laudantium placeat quibusdam non earum!
//             Corrupti commodi quod iure amet reprehenderit ullam, accusantium quibusdam recusandae id quam nam sequi dignissimos doloremque dolorum exercitationem provident earum, sapiente quis at veniam, ex deserunt autem natus. Similique, nulla?
//             Accusantium, aliquam iure tempora ut quasi eaque at pariatur saepe provident atque tempore placeat, consequuntur harum commodi? Modi enim deserunt perspiciatis debitis aliquid, possimus nemo consequuntur nulla aperiam assumenda ea?</p>
//         </ScrollFadeIn>

//         <ScrollFadeIn>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cupiditate, voluptatum aliquid eveniet esse omnis illum magni obcaecati cumque id minima fugiat tenetur ipsam illo quos ab ipsum, fuga distinctio!
//             Quia provident iusto autem beatae deleniti, possimus quaerat eaque vitae aperiam adipisci. Ullam, aliquid ad. Ut maxime, eveniet aut est impedit accusantium facilis voluptas voluptates accusamus voluptatibus obcaecati harum repellendus.
//             Repellendus molestiae ex, blanditiis laboriosam a perferendis excepturi, ipsa optio quo eos pariatur laudantium reiciendis tenetur voluptas at, saepe rem. Quod repellat rerum numquam perspiciatis deserunt fugiat fugit corrupti reprehenderit.
//             Exercitationem, in expedita dolorem, debitis veniam quibusdam enim pariatur rerum deleniti autem consequuntur, veritatis earum? Necessitatibus commodi blanditiis est excepturi nostrum adipisci molestias omnis sequi? Quam necessitatibus cumque commodi molestiae.
//             Repudiandae culpa facere porro ipsam saepe. Eius architecto ipsam, repellendus non voluptatum quia optio. Ex nostrum perspiciatis magni! Similique numquam, voluptates nisi commodi reprehenderit impedit minima eius aliquam aut tempora.
//             Dignissimos consequatur harum sapiente quam, aspernatur error consectetur asperiores eius, officia odio itaque cumque dicta! Quam iusto fuga dolores. Vero, numquam? Voluptates a error hic maxime culpa quis amet dolorum.
//             Cupiditate eum doloremque voluptas eius vero in esse, molestiae nostrum asperiores excepturi beatae unde! Voluptatibus ratione a atque voluptatum nemo laudantium aperiam veniam dolor, praesentium necessitatibus, doloremque, natus explicabo labore.
//             Incidunt, inventore dolorem ut fugiat at pariatur accusamus sapiente nihil. Illum dolor, id vel doloremque amet eum voluptate nostrum laborum architecto aliquam deleniti accusamus cumque esse alias at sunt? Maxime.
//             Architecto saepe totam itaque vitae eos iusto quos ex, reiciendis eius ab vero? Sunt, distinctio. Voluptas, nisi mollitia. Quis quibusdam voluptates eaque sequi assumenda corrupti laboriosam, quisquam nihil pariatur natus?
//             Odit, fugiat perferendis? Nobis porro doloribus dicta error inventore veritatis autem, iste ut facere consequatur nesciunt repellendus ipsum saepe asperiores facilis molestiae ullam rerum laudantium aut soluta. Animi, quos blanditiis?
//             Non, dolorum? Expedita recusandae autem earum optio eaque porro. Laborum deserunt aliquid facilis nemo optio sapiente velit est soluta veniam. Velit soluta ex recusandae similique esse eos, dolor eius tempora.
//             Optio maxime dolore, a suscipit quaerat modi iure illum. Assumenda at consectetur recusandae labore, velit praesentium quo enim id quam dolores architecto, itaque iste odit officiis perspiciatis nihil, expedita reprehenderit.
//             Iste, reprehenderit, laudantium nostrum, nemo maxime dolor officia accusamus consequatur repudiandae doloremque error temporibus labore ipsum totam obcaecati. Fugit molestias dolor voluptate maxime. Maiores suscipit officiis natus minima impedit tempore.
//             Nostrum quaerat quia perferendis officia iure! Et beatae natus veniam, cum reiciendis corrupti laudantium, neque numquam quis ipsum impedit, commodi est veritatis enim voluptatem illum necessitatibus possimus quo hic architecto.</p>
//         </ScrollFadeIn>

//         {/* Keep adding more sections like this */}
//       </div>
//     );
//   }
//   return (
//     <div>
//       <Content />
//     </div>
//   );
// }

// export default App;
