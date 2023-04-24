/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { socialLoginOptions } from './socialIconJson'

const SocialOption = () => {
  return (
    <div class='socialoptions d-flex justify-content-between'>
      <div class='d-flex'>
        {socialLoginOptions.map((item, key) => {
          return (
            <>
              <a href={item.url} key={key}>
                <div class='mr-3'>
                  <img src={item.icon} alt='Googlelogo' />
                </div>
              </a>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default SocialOption
