import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useState } from 'react'
import Menu from '../components/Menu'
import useMousePosition from '../hooks/useMousePosition'
import Image from 'next/image'

import Luis from '../public/images/Luis.png'
import Juan from '../public/images/Juan.png'

const Home: NextPage = () => {
  const [menuState, setMenuState] = useState(true)
  const [cursorHovered, setCursorHovered] = useState(false)

  const { x, y } = useMousePosition()

  const Cards = [
    {
      Title: 'STUDY',
      Description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro voluptatum facere eum, quasi enim harum optio amet asperiores laudantium laboriosam dolores dolorem, praesentium doloremque libero rem nobis ullam debitis.'
    },
    {
      Title: 'CREATE',
      Description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro voluptatum facere eum, quasi enim harum optio amet asperiores laudantium laboriosam dolores dolorem, praesentium doloremque libero rem nobis ullam debitis.'
    },
    {
      Title: 'GROW',
      Description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro voluptatum facere eum, quasi enim harum optio amet asperiores laudantium laboriosam dolores dolorem, praesentium doloremque libero rem nobis ullam debitis.'
    }
  ]

  const [hoverState, setHoverState] = useState(false)

  return (
    <div className='my-20 grid grid-cols-1'>
      <div className='flex justify-between items-center mb-10 pr-36 '>
        <span className='mainText ml-20'>Madre</span>
        <div className='w-60'>
          <h3 className='font-semibold text-2xl'>Who we are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            provident quod sint ratione aspernatur.
          </p>
        </div>
      </div>
      <div className='-mt-16 mb-10 relative'>
        <p className='marquee'>
          <span className='mainText'>
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media &nbsp;
          </span>
        </p>
        {/* <p className="marquee marquee2">
          <span className="mainText">Media Media Media Media&nbsp;</span>
        </p> */}
      </div>
      <div className='flex mt-44 ml-10 space-x-10 items-center cursor-pointer'>
        <div className='font-semibold text-white rounded-full bg-black flex items-center justify-center w-36 h-36 text-xl'>
          scroll down
        </div>
        <span className='mainText'>Agency</span>
      </div>

      <div className='-mt-28 -z-1 imageBehind'>
        <img src='/images/miami.webp' className=' filter brightness-90 ' />

        <div className='flex -mt-96 relative w-full max-w-7xl'>
          <h1 className='text-white text-8xl absolute  bg-black -mt-64 px-10 py-5 pl-36'>
            {' '}
            WHAT WE DO
          </h1>
          <h1 className='absolute bg-black -mt-24 pr-5 py-5 pl-36 text-white text-2xl'>
            {' '}
            BEST BRANDING FOR YOUR BUSINESS
          </h1>
          <div className='grid grid-cols-3 gap-10 w-full lg:ml-36 mt-14'>
            {Cards.map(el => {
              return (
                <div
                  className='bg-black p-10 w-full ml-0 max-w-2xl'
                  key={el.Title}
                >
                  <h3 className='text-white text-3xl font-semibold mb-5'>
                    {el.Title}
                  </h3>
                  <p className='text-white'>{el.Description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='bg-white w-full grid justify-items-center py-24'>
        <h1 className='text-4xl font-semibold'>About Us</h1>
        <h3 className='text-2xl mt-3 font-light'>
          Two young entrepreneurs, some wraps and a lot of coffee
        </h3>
        <div className='mt-5'>
          <svg
            width='382'
            height='32'
            viewBox='0 0 382 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M296.896 1.43762C247.781 -0.170783 215.171 0.209828 149.859 3.15365C144.115 3.4124 135.134 3.81435 129.902 4.0469C86.8027 5.96121 26.48 12.6648 9.76138 17.3978C6.29415 18.3794 0.0699144 21.2479 0.0435153 21.8767C0.0391509 21.9806 0.330553 21.8294 1.48111 21.131C6.78548 17.9109 20.7591 15.4186 55.072 11.5731C75.3406 9.30136 97.4642 7.41116 115.665 6.39629C129.558 5.62152 195.433 3.10261 197.638 3.26201C198.091 3.29462 195.576 3.46061 192.05 3.63081C154.166 5.45966 141.257 6.30398 118.365 8.45113C100.627 10.1147 90.207 11.4432 63.5537 15.4401C53.526 16.9437 53.8163 16.8844 53.6335 17.4712C53.1707 18.9579 54.4433 19.0448 62.6674 18.0882C118.441 11.6021 151.641 9.7858 203.532 10.3818C217.494 10.5422 265.814 12.1812 264.955 12.4652C264.464 12.6275 249.889 13.1361 225.473 13.8429C170.844 15.4245 135.8 18.556 97.0801 25.3161C86.3439 27.1904 84.4042 27.8407 85.2742 29.2733C86.193 30.7861 92.2747 30.6221 122.073 28.2802C166.702 24.7728 183.251 24.0264 218.857 23.9145C227.134 23.8885 241.341 24.1035 240.929 24.2485C240.814 24.289 231.824 24.9134 220.952 25.636C193.749 27.4438 176.282 28.8733 175.654 29.343C174.687 30.0672 174.91 31.1796 176.1 31.5587C177.55 32.0211 181.708 31.9761 191.297 31.3938C212.092 30.1311 232.833 29.8312 263.461 30.3502C268.045 30.4278 273.384 30.4713 275.326 30.4469C279.843 30.3902 286.987 30.6907 290.285 31.0764C291.697 31.2414 293.453 31.4457 294.187 31.5303C296.972 31.8508 287.34 30.1352 283.226 29.5778C272.915 28.1811 259.43 27.3991 243.405 27.2686C239.729 27.2387 236.69 27.1815 236.653 27.1418C236.574 27.0581 240.31 26.8401 258.406 25.8728C272.28 25.1309 272.629 25.0872 273.202 24.0174C273.565 23.3386 273.266 22.5006 272.499 22.0509C271.919 21.7107 251.733 20.9628 240.761 20.8749C214.457 20.6646 200.506 20.8412 182.935 21.6064C165.157 22.3809 153.333 23.2437 123.736 25.9263C105.718 27.5596 96.235 28.3111 93.0694 28.357L91.1073 28.3854L93.5022 27.8817C100.89 26.3284 125.445 22.8132 139.395 21.3121C168.372 18.1939 188.135 17.0347 232.406 15.8563C269.605 14.8662 277.234 14.4217 277.859 13.2084C278.533 11.9011 277.464 11.0628 274.428 10.5184C270.289 9.77609 218.895 7.76323 200.654 7.62902C182.77 7.49755 161.509 7.80423 150.259 8.3561C149.065 8.41474 147.764 8.43743 147.368 8.40659C144.456 8.18 184.741 6.03508 207.775 5.19046C233.008 4.26526 252.953 3.95711 280.582 4.06561C298.447 4.13595 343.963 6.33147 362.362 8.01069C379.405 9.56622 380.017 9.6033 380.556 9.11605C381.118 8.60786 381.15 8.2148 380.67 7.7012C380.059 7.04753 376.48 6.56459 368.327 6.03555C365.327 5.84077 358.709 5.28461 353.621 4.79938C348.533 4.31435 342.241 3.73616 339.639 3.51447C334.73 3.09623 308.236 1.80902 296.896 1.43762ZM205.854 3.10562C205.712 3.15528 205.434 3.14704 205.235 3.08716C205.037 3.02727 205.153 2.98668 205.493 2.9969C205.833 3.00713 205.996 3.05596 205.854 3.10562ZM203.165 3.20544C202.91 3.24282 202.446 3.22458 202.135 3.16503C201.824 3.10528 202.033 3.07467 202.599 3.09684C203.166 3.11921 203.421 3.16806 203.165 3.20544ZM200.372 3.29358C200.058 3.32689 199.549 3.30548 199.239 3.24599C198.929 3.1865 199.186 3.15932 199.809 3.18549C200.432 3.21166 200.686 3.26027 200.372 3.29358ZM146.176 8.52603C145.919 8.56355 145.501 8.54603 145.249 8.4871C144.996 8.42797 145.206 8.39721 145.716 8.41863C146.226 8.44004 146.433 8.48831 146.176 8.52603ZM143.901 8.62457C143.757 8.67495 143.525 8.66522 143.386 8.60294C143.247 8.54087 143.364 8.49974 143.648 8.51164C143.931 8.52353 144.045 8.57439 143.901 8.62457ZM295.98 31.8571C296.119 31.9193 296.351 31.9291 296.495 31.8787C296.639 31.8285 296.525 31.7777 296.241 31.7658C295.958 31.7539 295.84 31.795 295.98 31.8571Z'
              fill='black'
            />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-x-44 mt-16">
          <Image src={Luis} width="300" height="300"/>
          <Image src={Juan} width="300" height="300"/>
        </div>
      </div>

      {/* <div className='bg-pink w-full h-96 p-10'>
        <h1 className='text-black font-bold text-8xl'>OUR PROJECTS</h1>
        <div className='text-black font-bold text-3xl mt-20 relative'>
          <motion.div
            animate={{
              x: x,
              y: y,
              scale: cursorHovered ? 1.2 : 1,
              opacity: cursorHovered ? 0.8 : 0
            }}
            transition={{ ease: 'linear', duration: 0.2 }}
            className='cursor'
          ></motion.div>
          <Menu
            x={x}
            y={y}
            menuState={menuState}
            setMenuState={setMenuState}
            setCursorHovered={setCursorHovered}
          />
        </div>
      </div> */}
    </div>
  )
}

export default Home
