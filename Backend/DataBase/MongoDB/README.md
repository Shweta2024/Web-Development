Download & Install MongoDB on Windows :- [Read](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)

Note :- in the ``` .bash_profile ```, write mongos instead of mongo.

## CRUD opertaions

**C**reate **R**ead **U**pdate **D**elete

CRUD operations :- [Read](https://www.mongodb.com/basics/crud)

- starts mongosh shell

![image](https://user-images.githubusercontent.com/75883328/207002271-4a39d77b-b3be-4f53-8b6c-93577f3df476.png)

- shows all the present databases

![image](https://user-images.githubusercontent.com/75883328/207002441-ef935f6c-f9e0-462c-a7a2-86aa9f43e9ea.png)

 - creates and switched to a new database
 
 ![image](https://user-images.githubusercontent.com/75883328/207002530-82c85b17-02ef-425e-9797-a9bd0dbe8882.png)

## Create

### 1) insertOne() 

- it inserts one document in the specified collection. If the specified collection doesn't exists then it creates the collection and add the provided document to it.

```mongosh

db.collection.insertOne({key1:value1, key2:value2, key3:value3})

```

![image](https://user-images.githubusercontent.com/75883328/207002935-0d2081d8-e4a0-4aa8-b202-b4ae66bc48d3.png)

### 2)insertMany()

- it allows us to add multiple documnets to a collection.

```mongosh

db.collection.insertMany(
[{name : "shweta", roll:90},{name:"sahil",roll:20}]
)

```

![image](https://user-images.githubusercontent.com/75883328/207004785-2e182ac8-e3d7-421e-bc34-ea453eded6d1.png)


## Read

### 1) find()

**db.collection.find(query,projections,option)**

query & projection operation :- [read](https://www.mongodb.com/docs/manual/reference/operator/query/)

note : projection is optional. It states that which all field do we want.If its not specified then it will give all the field of the records.

- query

![image](https://user-images.githubusercontent.com/75883328/207010383-49209df3-ecc9-4069-81bd-033fe73b5139.png)


- query & projection

![image](https://user-images.githubusercontent.com/75883328/207011123-a5c94f2c-81bb-4b85-828f-3821a7b12fdf.png)

in the above imagewe have specified only name as projection but we are also getting back the id.Its because it comes default.If we don't want id to be displayed then we'll have to set it to false(0).👇



- if we pass no arguments to the find() method, then it displays all the records of the collection.

```mongosh

db.collection.find()

```

![image](https://user-images.githubusercontent.com/75883328/207006304-9304f7cb-460d-4834-8140-59df8fe97f90.png)

- if we want to get specific read operation, then we'll have to pass arguments to find() method.(search by value)

```mongosh

db.collection.find({key:value})

```

![image](https://user-images.githubusercontent.com/75883328/207007123-77654588-d42e-46fb-8e5f-798030bc44dc.png)

### 2) findOne()

- if there are many records that satisfies our criteria, in that case findOne() method returns the **first** record that matches the criteria. 

```mongosh

db.collection.findOne({key:value})

```

![image](https://user-images.githubusercontent.com/75883328/207007858-461a5812-9a8a-4575-8985-be502b1c5d02.png)


## Update

### 1) updateOne()

- it is used to update a single document of a collection.

- it takes 02 parameters :- **update filter** & **update action**

- “$set” key and provide the fields we want to update

![image](https://user-images.githubusercontent.com/75883328/207032008-0f1d23b0-b85f-4300-808a-296f81b6f8e0.png)
![image](https://user-images.githubusercontent.com/75883328/207032057-c9342bab-2865-46f5-9ccf-7863d18220b5.png)

### 2) updateMany()

- it updates all the field of the document which satifies the criteria.


### 3) replaceOne()

## Delete

### 1) deleteOne()

- it is used to delete one document from a collection.

![image](https://user-images.githubusercontent.com/75883328/207034805-b06a7016-bebc-40ea-b531-650a507d18de.png)


### 2) deleteMany()

- it is used to delete all the documents which matches the criteria.
