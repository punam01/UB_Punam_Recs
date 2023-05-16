import React from 'react'

function About(params) {
    return(
        <>
        <section className='hero-section'>
            <h1 className='hero-heading text-center'>Every Idea need a Cintan.</h1>
        </section>
        <div class="row">
            <div class="column p-5">
                <h4 className='my-2 text-center'>
                    The name "Chintanika" is derived from the Sanskrit language. In Sanskrit, "chintan" means contemplation or deep thinking. Therefore, Chintanika can be interpreted as a place or entity that encourages reflection, contemplation, or deep thought. The name encapsulates the serene and tranquil atmosphere that is often associated with the destination. It signifies a space where individuals can find solace and connect with their inner selves while immersed in the beauty of nature.
                    The name encapsulates the serene and tranquil atmosphere that is often associated with the destination.
                </h4>
            </div>
            <div class="column">
            </div>
        </div>
        <section className='hero-section text-center'>
            <h1 className='hero-heading mb-1'>Create the space for your thinking to take off.</h1>
            <h4 className='my-2'>Anyone can write on Cintanika. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You'll find pieces by independent writers, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.</h4>
            <button className='btn hero my-5'>Write on Chintanika</button>
        </section>
        <div class="row">
            <div class="column p-5">
                <h4 className='hero-heading'>
                    Read, write, and expand your world.
                </h4>
            </div>
            <div class="column">
            </div>
        </div>
        </>
    );
}
export {About};