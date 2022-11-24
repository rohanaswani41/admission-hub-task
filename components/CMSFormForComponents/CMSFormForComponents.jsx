
import pageStructure from './PageStructure.json'
import HeroComponentJson from '../HeroComponent/HeroComponent.json'
import TextComponentJson from '../TextComponent/TextComponent.json';
import FooterComponentJson from '../FooterComponent/FooterComponent.json';
import CardComponentJson from '../CardComponent/CardComponent.json';
import TitleComponentJson from '../TitleComponent/TitleComponent.json';
import SectionComponentJson from '../SectionComponent/SectionComponent.json';
import ThreeCardComponentJson from '../ThreeCardComponent/ThreeCardComponent.json';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function CMSFormForComponents(){
    const componentToStructure = {
        "HeroComponent":HeroComponentJson
    }
    const [form, setForm] = useState([])

    const getOptions = (options) => {
        const opts = []
        options.forEach((opt)=>{
            opts.push(<option value={opt}>{opt}</option>)
        });
        return opts
    }
    const getJson = (componentName) =>{
        if (componentName === "HeroComponent"){
            return HeroComponentJson;
        }
        else if (componentName === "TextComponent"){
            return TextComponentJson;
        }
        else if(componentName === "FooterComponent"){
            return FooterComponentJson;
        }
        else if(componentName === "CardComponent" ){
            return CardComponentJson;
        }
        else if(componentName === "TitleComponent"){
            return TitleComponentJson;
        }
        else if(componentName === "SectionComponent"){
            return SectionComponentJson;
        }
        else if(componentName === "ThreeCardComponent"){
            return ThreeCardComponentJson;
        }
    }
    const getAllComponents = () =>{
    
        Object.keys(pageStructure['sections']).map((key,index)=>{
            
            /**
             * gets the field values from the structure
             */
            form.push(<span><h2>{pageStructure['sections'][key]['section_heading']}</h2></span>)
            pageStructure['sections'][key]['components'].forEach((sing_component)=>{
                    const json = getJson(sing_component['component'])
                    console.log(json)
                    form.push(
                        <h3>{json['Heading']}</h3>
                    )
                    const fields = json['fields']
                
                    fields.forEach((data)=>{

                        if(data['type'] !== "select"){
                            form.push(
                                <>
                                <Form.Group className="mb-3">
                                <Form.Label>{data['label']}</Form.Label>
                                <Form.Control type={data['type']} placeholder={data['placeholder']} />
                                </Form.Group>
                                <br/>
                                </>
                            )
                        }
                        else{
                            form.push(
                                <>
                                <Form.Group className="mb-3">
                                <Form.Label>{data['label']}</Form.Label>

                                <Form.Select placeholder={data['placeholder']} >   
                                    {getOptions(data['options'])}
                                </Form.Select>
                                </Form.Group>
                                <br/>
                                </>
                            )
                        }
                }) 
            })
        })
    }

    getAllComponents()
    return(
        <>
         <Form>
            <div class="form-group">
                {form}
            </div>
        </Form>
        </>
    );
}