from curses.ascii import isalpha, isspace #check if character alphabetic or whitespace
import pandas as pd #panda library alias pd, use for data manipulation/analysis
import numpy as np #numpy library alias np, use for computation
import ssl 
import re #regex
import firebase_admin #firebase
from firebase_admin import credentials #firebase authentication
from firebase_admin import firestore #firestore database
ssl._create_default_https_context = ssl._create_unverified_context #bypass ssl verification