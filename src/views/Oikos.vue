<template>
    <!-- NO SE -->
    <article class="article" id="oikoscentrum">
        <p class="color-verde text-right"><em>Seeding ideas for another future</em></p>
        <!-- UNDER CONDTRUCTION -->
        <div class="color-gris text-serif">
            <p class="text-center small "> Website under construction: <a href="#;">Sign up</a> to be notified of
                major
                updates!<br> <a href="#;">Donate</a>, to power climate stabilization: because support in the early
                stage
                of a project has a huge impact. </p>
        </div>
        <h1 class="text-center">Oikos Centrum</h1>
        <p class="text-center"><strong class="">An <em class="color-azul">incubator</em>, <span class="text-serif">
                    <em class="color-verde">laboratory</em> and <em class="color-rojo">antenna</em><br><em>of
                        economic, political and social alternatives</em></span></strong> </p>
        <!--  -->
        <p style="display: flex; gap: 0.35em;" class="color-azul"><strong style="white-space: nowrap;">An
                incubator</strong><span class="text-serif"> of <em>Basic Social
                    Research</em> theory <br>to better understand the economic, political, and cultural implications of
                climate stability and of a life-sustaining habitat </span></p>
        <!--  -->
        <p style="display: flex; gap: 0.35em;" class="color-verde"><strong style="white-space: nowrap;">A
                laboratory</strong><span class="text-serif"> of <em>Applied Social
                    Research</em> <br>on geo- and macro-economic policy tools capable of spurring andcoordinating a
                rapid, drastic and harmonious decarbonization </span></p>
        <!--  -->
        <p style="display: flex; gap: 0.35em;" class="color-rojo"><strong style="white-space: nowrap;">An
                antenna</strong> <span class="text-serif"> for <em>Public Education and
                    Novel Political Action</em> <br>for a historic transition into acarbon-constrained world </span></p>
        <!--  -->
        <p class="text-center"><strong>Clarifying, catalyzing and implementing <br>the conditions of <em>climate
                    stability</em>.</strong>
        </p>
        <!--  -->
        <p class="text-serif text-center mb-0">Proposal for a <em>green think/do/info tank</em>:<br>
            experimental RDD&D* program<br>
            —social research, institutional design and education— <br>
            on a rapid transition to a <em>green civilization
                for the Anthropocene</em> </p>
        <p class="text-center mt-0"><small>* RDD&D: Research, Development, Demonstration and Dissemination</small>
        </p>
        <p class="text-serif text-center mb-0"> ( A venture capital fund for social innovation**:<br>
            a seedbed of novel strategic, institutional and policy concepts<br>
            for a rapid and harmonious transition into a carbon-constrained world ).</p>
        <p class="text-center text-justify mt-2"><small> ** Venture capital normally invests in portfolios of
                “low-probability/ high-impact” concepts: money poured into most embryonic ideas will go to waste —but it
                only takes one of them to work for the investment to pay off handsomely. A laboratory of social alternatives
                runs on the same principle, but instead of developing new technologies (i.e. “new and improved” manipulation
                of matter), or novel products that can be sold in the market, it is vowed to <em>social</em> innovation.
                Structurally
                unprecedented challenges require novel strategic responses embodied in new institutions, policies and
                politics—call them new “institutional algorithms” or “legal technology”—, that can turn out to be
                surprisingly easy to adopt and even operationalize. And one such high-impact policy concept can do far more
                to decarbonize societies than technological “solutions.” </small> </p>
    </article>
    <!-- MISSION -->
    <article>
        <h1>MISSION</h1>
        <p><em><strong>Seeding ideas for a livable future</strong></em></p>
        <p>Humanity must rapidly and sharply discontinue the use of most of the fossil fuels that power over 80% of the
            global economy, lest we likely precipitate radical climate disruption. For we are set to accumulate enough GHG
            in the atmosphere, over the next decade, to trigger various natural self-reinforcing warming feedbacks feared to
            bump us into a “hothouse planet” …which spells what can only be concisely and precisely described as <u
                class="openModal" @click="openModal">
                the end of
                civilization.
            </u>ological footprint of modern industrial society, that we have inaugurated a new <em>geological epoch</em>:
            the Anthropocene, in which the very shape of the habitat is now in our hands …and we are about to render vast
            swaths of the planet uninhabitable, and much of the rest unbearable. Preventing this outcome presumes so
            colossal a transformation that it simply seems impossible. But such a historical shift does not happen
            overnight. It presumes a wholesale review of economics, politics and culture through the lens of ecology. For
            this is what highlights the strategic responses capable of stabilizing the climate and preserving a habitat
            propitious to the flourishing of life. And various rereadings of our historical predicament have been hatching
            the political and economic agendas of ecological integrity since the fuzzy concept of “sustainable development”
            emerged in 1987. This has by now fizzled into an empty slogan that has at best greenwashed policy. But this is
            because these have been forerunning reconceptualizations, that have not yet crystalized in policy hinges capable
            of spurring and coordinating the rapid transition to the carbon-constrained world required to save the future.
            Systemic change —whether societal collapse, or the political emergence and adoption of new “grand strategies” of
            social organization— happen, as Ernest Hemingway put it, gradually …then suddenly.</p>
        <p>OIKOS is an RDD&D program (Research, Development, Demonstration and Dissemination) vowed to spread <router-link
                to="/antenna">awareness</router-link> of
            our unprecedented historical predicament; to sharpen ongoing <router-link
                to="/incubator">rereadings</router-link> of economics, politics and history
            through the lens of climate stability and ecological integrity; and to clarify new <router-link
                to="/laboratory">policy</router-link> and <router-link to="/climate-action-now">political
                action</router-link>
            strategies that can coordinate the rapid, drastic and harmonious decarbonization to which history now summons
            humanity.</p>

    </article>

    <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal">
        <!-- <template #header>Header</template> -->
        <template #content>
            <p>The “end of civilization” is not the “catastrophist” or exaggerated apprehension of a few lunatics, or some
                plot by “globalists” to control us. It’s what scientists are forecasting. Too many people still think that,
                yes, climate change will bring many disasters, but it’s not the “end of the world”: life, after all, will
                continue and adjust to changing conditions; the climate has always changed; we can adapt; technology will
                replace the polluting energy that must be discontinued; fossil fuels are still the poor’s only hope; and
                remain critical to our well-being —you’ve heard the story. But “the end of civilization” is only shorthand
                —a concise but precise description— for “vast swaths of the world becoming uninhabitable, and others
                painfully bearable, as they are hit by a “new normal” of killer heat waves, droughts, desertification, water
                scarcity, sea-level rise submerging coastlands and historic cities, spreading mass crop failures and food
                shortages, famines, economic dislocation, political instability, ubiquitous or lethal social conflict,
                failing states, and hundreds of millions (if not billions if we get unlucky) of refugees and death.” That’s
                the technical definition of a collapsed civilization. And this prospect will be virtually programed to
                unfold, progressively and inexorably, once we accumulate enough GHG in the atmosphere to trigger the tipping
                points of self-accelerating warming feared to bump us into a 3ºC or 4ºC+ planet. This is the future now
                being locked in by policies that in effect protect the freedom to pollute. That’s why top climate scientists
                have long been whispering the four words in private, and are beginning to state them <a
                    href="https://www.oikoscentrum.org/A-rising-chorus-of-scientists-talking-of-the-end-of-civilization">publicly</a>,
                if still in
                dispersed and for the moment uncoordinated fashion. </p>
        </template>
        <!-- <template #footer>Footer</template> -->
    </ModalComponent>
</template>

<script setup>
import { onBeforeMount, onMounted, onUpdated, ref } from "vue";
//equivalente a document.ready de jquery
// window.addEventListener("DOMContentLoaded", (event) => {
onMounted(() => {
    console.log('DOMContentLoaded');

    // map our commands to the classList methods
    const fnmap = {
        'toggle': 'toggle',
        'show': 'add',
        'hide': 'remove'
    };
    const collapse = (selector, cmd) => {
        const targets = Array.from(document.querySelectorAll(selector));
        targets.forEach(target => {
            target.classList[fnmap[cmd]]('show');
        });
    }

    // Grab all the trigger elements on the page
    const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

    // Listen for click events, but only on our triggers
    window.addEventListener("click", callback);
    window.addEventListener("touchstart", callback);

    function callback(ev) {

        console.log('click');

        const elm = ev.target;
        if (triggers.includes(elm)) {
            const selector = elm.getAttribute('data-target');
            collapse(selector, 'toggle');
        }
    };
});

import ModalComponent from "../components/Modal.vue";

const isModalOpened = ref(false);

const openModal = () => {
    isModalOpened.value = true;
};
const closeModal = () => {
    isModalOpened.value = false;
};

const submitHandler = () => {
    //here you do whatever
}
</script>