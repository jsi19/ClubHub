from curses.ascii import isalpha, isspace #check if character alphabetic or whitespace
import pandas as pd #panda library alias pd, use for data manipulation/analysis
import numpy as np #numpy library alias np, use for computation
import ssl 
import re #regex
import firebase_admin #firebase
from firebase_admin import credentials #firebase authentication
from firebase_admin import firestore #firestore database
ssl._create_default_https_context = ssl._create_unverified_context #bypass ssl verification

#table = pd.read_html(https://sa.ucla.edu/RCO/public/search?q=%20) scrape from this url

#match = r"[]" 
# Define regex pattern to to search for specific characters or patterns in strings, not sure what the regex expression would be 

#df = table[0] 
#selects the first DataFrame from the list and assigns it to the variable df. This allows further manipulation of data contained in the first table from the webpage

#top 5 recommendations that will show up for user
#rec1 = []
#rec2 = []
#rec3 = []
#rec4 = []
#rec5 = []



#userRecs = ['rec1','rec2','rec3', 'rec4', 'rec5']


#modify scraped list

#def modList(x):
    
    #for i in x:

        #j = 0

        #while j < len(i):
            #if j <= len(i)-2:
                #if i[j]==' ' and i[j+1]==' ':

                    #newEl = i[j+2:len(i)]

                    #modEl = i[0:j]
                    #x.append(modEl)
                    #x.append(newEl)
            #j+=1
    
    #y = []
    #for i in x:
        #if "  " in i or i=='':  clearing whitespace
            #continue
        #else:
            #y.append(i)

    #for i in y:
        #if i == ' ':   we can input strings here that we want to be removed
            #y.remove(i)

    #z=[]
    #for i in y:
        #i=i.lower()
        #fb_id = ''
        #for j in i:
            #if j.isalnum():
                #fb_id+=j
        #if fb_id=='stopbyecafé':
            #fb_id='stopbyecafe'
        #z.append(fb_id)

    
    #return z


#rec1=modList(rec1)
#rec2=modList(rec2)
#rec3=modList(rec3)
#rec4=modList(rec4)
#rec5=modList(rec5)

