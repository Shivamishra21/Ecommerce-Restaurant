import {FeatureContainer,FeatureButton,FeatureDContainer} from './FeatureElement'

const Feature = ()=>{
    return (
        <div>
             <FeatureContainer>
            <h1>
                Pizza of the day
            </h1>
            <p>
                Truffle alfrede sauce topped with 24 carot gold dust.
            </p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
        <FeatureDContainer>
            <h1>
                Dessert of the day
            </h1>
            <p>
                Truffle alfrede sauce topped with 24 carot gold dust.
            </p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureDContainer>
        </div>
       

    )
}

export default Feature;