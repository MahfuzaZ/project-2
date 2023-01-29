import React from 'react'
import apple from "../img/apple.jpeg"
import sass from "../main.module.scss"

function About() {
  return (
    <div className={sass.about}>
        <img src={apple} alt="" />
        <h1>Apple</h1>
        <p>Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States. Apple is the largest technology company by revenue (totaling US$365.8 billion in 2021) and, as of June 2022, is the world's biggest company by market capitalization, the fourth-largest personal computer vendor by unit sales and second-largest mobile phone manufacturer. It is one of the Big Five American information technology companies, alongside Alphabet (Google), Amazon, Meta (Facebook), and Microsoft.

Apple was founded as Apple Computer Company on April 1, 1976, by Steve Wozniak, Steve Jobs and Ronald Wayne to develop and sell Wozniak's Apple I personal computer. It was incorporated by Jobs and Wozniak as Apple Computer, Inc. in 1977 and the company's next computer, the Apple II, became a best seller and one of the first mass-produced microcomputers. Apple went public in 1980 to instant financial success. The company developed computers featuring innovative graphical user interfaces, including the 1984 original Macintosh, announced that year in a critically acclaimed advertisement. By 1985, the high cost of its products and power struggles between executives caused problems. Wozniak stepped back from Apple amicably and pursued other ventures, while Jobs resigned bitterly and founded NeXT, taking some Apple employees with him.

</p>
       <h1>History</h1>
       <p>Apple Computer Company was founded on April 1, 1976, by Steve Jobs, Steve Wozniak, and Ronald Wayne as a partnership.[6][9] The company's first product was the Apple I, a computer designed and hand-built entirely by Wozniak.[10] To finance its creation, Jobs sold his Volkswagen Bus, and Wozniak sold his HP-65 calculator.[11]: 57 [a] Wozniak debuted the first prototype Apple I at the Homebrew Computer Club in July 1976.[12] The Apple I was sold as a motherboard with CPU, RAM, and basic textual-video chips—a base kit concept which would not yet be marketed as a complete personal computer.[13] It went on sale soon after debut for US$666.66 (equivalent to $3,175 in 2021).[14][15]: 180  Wozniak later said he was unaware of the coincidental mark of the beast in the number 666, and that he came up with the price because he liked "repeating digits".[16]

Apple Computer, Inc. was incorporated on January 3, 1977,[17][18] without Wayne, who had left and sold his share of the company back to Jobs and Wozniak for $800 only twelve days after having co-founded Apple.[19] Multimillionaire Mike Markkula provided essential business expertise and funding of US$250,000 (equivalent to $1,117,930 in 2021) to Jobs and Wozniak during the incorporation of Apple.[20] During the first five years of operations, revenues grew exponentially, doubling about every four months. Between September 1977 and September 1980, yearly sales grew from $775,000 to $118 million, an average annual growth rate of 533%.[21]</p>
    </div>
  )
}

export default About