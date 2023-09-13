
const horariosData = {
        riogrande: [
          {
            tipo: 'Multiusos',
            horas: {
                8: 8,
                9: 9,
                10: 10,
                11: 11,
                12: 12,
                13: 13,
                14: 14,
                15: 15,
                16: 16,
                17: 17,
                18: 18,
                19: 19
      
              },
            horario: {
              lunes: [
                { clase: 'Body Combat', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/bodycombat.png' },
                
                { clase: 'Body Pump', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/bodypump.png' },
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 10, 0), logo: './gallery/horarios/riogrande/zumba.png' },
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 13, 0), logo: './gallery/horarios/riogrande/zumba.png' },
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 17, 0), logo: './gallery/horarios/riogrande/zumba.png' },
                { clase: 'Body Combat', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/riogrande/bodycombat.png' },
                { clase: 'Body Pump', duracion: 60, horaInicio: new Date(0, 0, 0, 19, 0), logo: './gallery/horarios/riogrande/bodypump.png' },
              ],
              martes: [
                { clase: 'Powerband', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/powerband.png' },
                { clase: 'Yoga', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/yoga.png' },
                { clase: 'Body Pump', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/riogrande/bodypump.png' },
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 19, 0), logo: './gallery/horarios/riogrande/zumba.png' },
              ],
              miercoles: [
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/zumba.png' },
                { clase: 'Body Step', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/bodystep.png' },
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 17, 0), logo: './gallery/horarios/riogrande/zumba.png' },
                { clase: 'Body Step', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/riogrande/bodystep.png' },
                { clase: 'Body Pump', duracion: 60, horaInicio: new Date(0, 0, 0, 19, 0), logo: './gallery/horarios/riogrande/bodypump.png' },
                
              ],
              jueves: [
                { clase: 'Body Pump', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/bodypump.png' },
                { clase: 'Powerband', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/powerband.png' },
                { clase: 'Body Pump', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/riogrande/bodypump.png' },
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 19, 0), logo: './gallery/horarios/riogrande/zumba.png' },
              ],
              viernes: [
                { clase: 'Body Combat', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/bodycombat.png' },
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/zumba.png' },
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 17, 0), logo: './gallery/horarios/riogrande/zumba.png' },
                { clase: 'Yoga', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/riogrande/yoga.png' },
                
              ],
              sabado: [
               
                { clase: 'Zumba', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/zumba.png' },
                { clase: 'Body Pump', duracion: 60, horaInicio: new Date(0, 0, 0, 10, 0), logo: './gallery/horarios/riogrande/bodypump.png' },
                
                
              ],
              // Agrega más días y clases para el salón de multiusos si es necesario
            },
          },


          
          {
            tipo: 'Spinning',
            horas: {
                7: 7,
                8: 8,
                9: 9,
                10: 10,
                11: 11,
                12: 12,
                13: 13,
                14: 14,
                15: 15,
                16: 16,
                17: 17,
                18: 18,
                19: 19
              },
            horario: {
              lunes: [
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 7, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 17, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'RPM', duracion: 60, horaInicio:  new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/riogrande/spinning/rpm.png' },
              ],
              martes: [
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 7, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 17, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
              ],
              miercoles: [
                { clase: 'RPM', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/spinning/rpm.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 17, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
              ],
              jueves: [
                
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'Spinning', duracion: 60, horaInicio:  new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/riogrande/spinning/spinning.png' },
                { clase: 'RPM', duracion: 60, horaInicio:  new Date(0, 0, 0, 17, 0), logo: './gallery/horarios/riogrande/spinning/rpm.png' },
                
              ],
              viernes: [
                
                { clase: 'RPM', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/riogrande/spinning/rpm.png' },
                
                
              ],

            },
          },
          {
            tipo: 'Funcional',
            horas: {
                
                14: 14,
                15: 15,
                16: 16,
                17: 17,
                18: 18,
                19: 19
              },
            horario: {
              lunes: [
                { clase: 'PowerBand', duracion: 60, horaInicio:  new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/riogrande/funcional/powerband.png' },
                { clase: 'Crossfit', duracion: 60, horaInicio:  new Date(0, 0, 0, 19, 0), logo: '' },
                
              ],
              martes: [
                { clase: 'Crossfit', duracion: 60, horaInicio:  new Date(0, 0, 0, 19, 0), logo: '' },
                
              ],
              miercoles: [
                { clase: 'Crossfit', duracion: 60, horaInicio:  new Date(0, 0, 0, 19, 0), logo: '' },
                
              ],
              jueves: [
                
                { clase: 'Crossfit', duracion: 60, horaInicio:  new Date(0, 0, 0, 19, 0), logo: '' }, 
              ],
              

            },
          },
          

        ],
        lastorres: [
            {
                tipo: 'Multiusos',
                horas: {
                  8: 8,
                  9: 9,
                  10: 10,
                  11: 11,
                  12: 12,
                  13: 13,
                  14: 14,
                  15: 15,
                  16: 16,
                  17: 17,
                  18: 18,
                  19: 19
                },
                horario: {
                  lunes: [
                    {
                      clase: 'Body Pump',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 9, 0),
                      logo: './gallery/horarios/lastorres/bodypump.png'
                    },
                    {
                      clase: 'Yoga',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 10, 0),
                      logo: './gallery/horarios/lastorres/yoga.png'
                    },
                    {
                      clase: 'Body Pump',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 17, 0),
                      logo: './gallery/horarios/lastorres/bodypump.png'
                    },
                    {
                      clase: 'Body Combat',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 18, 0),
                      logo: './gallery/horarios/lastorres/bodycombat.png'
                    },
                    {
                      clase: 'Zumba',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 19, 0),
                      logo: './gallery/horarios/lastorres/zumba.png'
                    }
                  ],
                  martes: [
                    {
                      clase: 'Zumba',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 8, 0),
                      logo: './gallery/horarios/lastorres/zumba.png'
                    },
                    {
                      clase: 'Powerband',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 9, 0),
                      logo: './gallery/horarios/lastorres/powerband.png'
                    },
                    {
                      clase: 'Zumba',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 17, 0),
                      logo: './gallery/horarios/lastorres/zumba.png'
                    },
                    {
                      clase: 'Powerband',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 18, 0),
                      logo: './gallery/horarios/lastorres/powerband.png'
                    },
                    {
                      clase: 'Body Pump',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 19, 0),
                      logo: './gallery/horarios/lastorres/bodypump.png'
                    }
                  ],
                  miercoles: [
                    {
                      clase: 'Body Combat',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 8, 0),
                      logo: './gallery/horarios/lastorres/bodycombat.png'
                    },
                    {
                      clase: 'Yoga',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 9, 0),
                      logo: './gallery/horarios/lastorres/yoga.png'
                    },
                    {
                      clase: 'Zumba',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 18, 0),
                      logo: './gallery/horarios/lastorres/zumba.png'
                    },
                    {
                      clase: 'Pilates',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 19, 0),
                      logo: './gallery/horarios/lastorres/pilates.png'
                    }
                  ],
                  jueves: [
                    {
                      clase: 'Body Pump',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 8, 0),
                      logo: './gallery/horarios/lastorres/bodypump.png'
                    },
                    {
                      clase: 'Zumba',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 9, 0),
                      logo: './gallery/horarios/lastorres/zumba.png'
                    },
                    {
                      clase: 'Body Pump',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 18, 0),
                      logo: './gallery/horarios/lastorres/bodypump.png'
                    },
                    {
                      clase: 'Body Combat',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 19, 0),
                      logo: './gallery/horarios/lastorres/bodycombat.png'
                    }
                  ],
                  viernes: [
                    {
                      clase: 'Zumba',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 8, 0),
                      logo: './gallery/horarios/lastorres/zumba.png'
                    },
                    {
                      clase: 'Zumba',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 17, 0),
                      logo: './gallery/horarios/lastorres/zumba.png'
                    },
                    {
                      clase: 'Powerband',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 18, 0),
                      logo: './gallery/horarios/lastorres/powerband.png'
                    }
                  ],
                  sabado: [
                    {
                      clase: 'Zumba',
                      duracion: 60,
                      horaInicio: new Date(0, 0, 0, 10, 0),
                      logo: './gallery/horarios/lastorres/zumba.png'
                    }
                  ]
                }
            },
            {
                tipo: 'Spin',
                horas: {
                  8: 8,
                  9: 9,
                  10: 10,
                  11: 11,
                  12: 12,
                  13: 13,
                  14: 14,
                  15: 15,
                  16: 16,
                  17: 17,
                  18: 18,
                  19: 19
                },
                horario: {
                    lunes: [
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' },
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' },
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' }
                      ],
                      martes: [
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' },
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' },
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' }
                      ],
                      miercoles: [
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' },
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' },
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' }
                      ],
                      jueves: [
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' },
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' },
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' }
                      ],
                      viernes: [
                        { clase: 'Spinning', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: './gallery/horarios/lastorres/spinning/spinning.png' }
                      ]
                }
            },
            {
                tipo: 'Funcional',
                horas: {
                  8: 8,
                  9: 9,
                  10: 10,
                  11: 11,
                  12: 12,
                  13: 13,
                  14: 14,
                  15: 15,
                  16: 16,
                  17: 17,
                  18: 18,
                  19: 19,
                  20:20
                },
                horario: {
                    lunes: [
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 19, 0), logo: '' },
                        { clase: 'Box', duracion: 60, horaInicio: new Date(0, 0, 0, 20, 0), logo: '' }

                        
                      ],
                      martes: [
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 19, 0), logo: '' },
                        { clase: 'Box', duracion: 60, horaInicio: new Date(0, 0, 0, 20, 0), logo: '' }
                        
                      ],
                      miercoles: [
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 18, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 19, 0), logo: '' },
                        { clase: 'Box', duracion: 60, horaInicio: new Date(0, 0, 0, 20, 0), logo: '' }
                        
                      ],
                      jueves: [
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 8, 0), logo: '' },
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 9, 0), logo: '' },
                        
                        { clase: 'Crossfit', duracion: 60, horaInicio: new Date(0, 0, 0, 19, 0), logo: '' },
                        { clase: 'Box', duracion: 60, horaInicio: new Date(0, 0, 0, 20, 0), logo: '' }
                        
                      ],
                      
                }
            }        
   
        ],
        hardbeat: [
            
            {
                tipo: 'Funcional',
                horas: {
                    8: 8,
                    9: 9
                    
                  },
              horario: {
                lunes: [
                  
                  { clase: 'Crossfit', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: '' },
                  
                ],
                martes: [
                  { clase: 'Crossfit', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: '' },
                  
                ],
                miercoles: [
                  { clase: 'Crossfit', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: '' },
                  
                ],
                jueves: [
                  
                  { clase: 'Crossfit', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: '' }, 
                ],
                viernes: [
                  
                    { clase: 'Crossfit', duracion: 60, horaInicio:  new Date(0, 0, 0, 8, 0), logo: '' }, 
                  ],
                
  
              },
            }
          ]

}
    
export default horariosData;
