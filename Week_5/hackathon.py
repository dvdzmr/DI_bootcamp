from ucimlrepo import fetch_ucirepo 
  
# fetch dataset 
online_retail = fetch_ucirepo(id=352) 
  
# data (as pandas dataframes) 
X = online_retail.data.features 
y = online_retail.data.targets 
  
# metadata 
# print(online_retail.metadata) 
  
# variable information 
#print(online_retail.variables) 

print(y)



# Demographics
# Sort customers by demographics
# Sort customers by purchasing behavior
# Sort customers by financial history