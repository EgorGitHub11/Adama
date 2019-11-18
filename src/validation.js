import React, { Component } from 'react';
import { View, Text } from 'react-native';

export const validation  = {
    name: {
        presence:{
            message: 'Please enter an name',
        },
        format:{
            pattern: "/^[A-Za-z\s]+$/.test(x)",
            message: 'Please enter a valid name'
        }
    },

    phoneNumber:{
        presence:{
            message: 'Please enter an phoneNumber',
        },
        format:{
            pattern: '/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im',
            message: 'Please enter a valid number'   
        }
    }

}

export function validate (nameField, value){
    let resp = [null, null];
        if(validation.hasOwnProperty(nameField)){
            let v = validation[nameField]
                if(value==''  || value==null){
                    resp[0] = false
                    resp[1] = v['preference']['message']
                } else if (v.hasOwnProperty('format') && !v['format']['pattern'].test(value)){
                    resp[0] = false
                    resp[1] = v['format']['message']
                } else if (v.hasOwnProperty('length')){
                    let l = v['length'];
                    if(l.hasOwnProperty('minimum') && value.length<l['minimum']['val']){
                        resp[0] = false
                        resp[1] = l['minimum']['message']
                    }else if(l.hasOwnProperty('maximum') && value.length<l['maximum']['val']){
                        resp[0] = false
                        resp[1] = l['maximum']['message']
                    }
                }else{
                    resp[0] = true
                }
        }else{
            resp[0] = true
        }
        return resp;
    }
