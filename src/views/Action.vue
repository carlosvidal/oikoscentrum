<template>
    <article id="campaings" class="color-marron">
        <h1>Climate Antion Now</h1>
        <p class="gorro">
            Education through action<br>
            <em>
                Tell me and I will forget;<br>
                show me and I will remember;<br>
                involve me and I will understand.
            </em> Lao Tze
        </p>

        <p>The hour is ominous. Humanity faces an unprecedented —no less than historic— choice: concerted decarbonization or
            radical climate disruption …and the <u>ensuing end of civilization.</u><a href="#;" data-toggle="collapse"
                data-target="#more1">[ More + ]</a></p>
        <div id="more1" class="collapse">
            <p>This is not the “catastrophist” or exaggerated apprehension of a few lunatics, or a plot by “globalists” to
                control us. It’s what scientists are forecasting. Too many people still think that, yes, climate change will
                bring many disasters, but it’s not the “end of the world”: life, after all, will continue and adjust to
                changing
                conditions; the climate has always changed; we can adapt; technology will replace the polluting energy that
                must
                be discontinued; fossil fuels are still the poor’s only hope; and remain critical to our well-being —you’ve
                heard the story. But “the end of civilization” is only shorthand —a concise but precise description— for
                “vast
                swaths of the world becoming uninhabitable, and others painfully bearable, as they are hit by a “new normal”
                of
                killer heat waves, droughts, desertification, water scarcity, sea-level rise submerging coastlands and
                historic
                cities, spreading mass crop failures and food shortages, famines, economic dislocation, political
                instability,
                ubiquitous or lethal social conflict, failing states, and hundreds of millions (if not billions if we get
                unlucky) of refugees and death.” That’s the technical definition of a collapsed civilization. And this
                prospect
                will be virtually programed to unfold, progressively and inexorably, once we accumulate enough GHG in the
                atmosphere to trigger the tipping points of self-accelerating warming feared to bump us into a 3ºC or 4ºC+
                planet. This is the future now being locked in by policies that in effect protect the freedom to pollute.
                <a href="#;" data-toggle="collapse" data-target="#more1">[ Less - ]</a>
            </p>
        </div>
        <p>That’s why top climate scientists have long been whispering the four words in private, and are beginning to state
            them <a href="https://www.oikoscentrum.org/A-rising-chorus-of-scientists-talking-of-the-end-of-civilization"
                target="_blank">publicly</a>,
            if still in dispersed and for the moment uncoordinated fashion.</p>
        <p>What will change the system, not the climate is social innovation: structurally unprecedented challenges require
            unprecedented —i.e. novel, unaccustomed — strategic responses, institutions and policies.</p>
        <p>But all fundamental innovation begins as a crazy idea, for the simple reason that it is unprecedented and thus
            radically unfamiliar by definition: it is an affront to “common” (i.e. shared) sense because it runs counter to
            the conventional wisdom. So a social novum always begins way “ahead of the (adoption) curve,” i.e. before it
            goes through specific phases that are well-understood by now: disregard, scepticism, opposition and embrace
            (i.e. in Mahatma Gandhi’s famous formulation, “first they ignore you, then they laugh at you, then they fight
            you, then you win”).</p>
        <p>For every year we advance the adoption of a meaningful decarbonization strategy, we will save about one sixth of
            the “carbon budget” left before atmospheric GHG accumulation reaches levels likely to trigger catastrophic
            climate change.</p>


        <p><a href="https://www.paypal.com/donate/?hosted_button_id=CH8ER3XJKWQ8S">Donate</a></p>
    </article>
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
</script>