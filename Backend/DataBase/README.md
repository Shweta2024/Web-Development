## we are having 02 types of databases :- 
- SQL : Structured Query Language
- NoSQL : Not Only Structured Query Language

<br>

## SQL VS NoSQL

| S.No | SQL | NoSQL |
|-------- |----------- |---------------|
| 1 | It is also known as Relational Database | It is also known as non-Relationa Database |
| 2 | Data is stored in tabular format | Data is stored as JSON document,that has key-value pairs |
| 3 | It has a predefined/static/fixed schema | They have Dynamic schema |
| 4 | These databases aren't suitable for hierarchical data storage | They are best suited for hierarchical data storage |
| 5 | Vertically Scalable | Horizontally Scalable |
| 6 | Follows ACID property | Follows CAP(Consistency, Availability, Partition tolerance) |
| 7 | Slower | Faster |
| 8 | Example: MySQL, Oracle etc | MongoDB |

<br>


**Vertical Scalability** : It means that as the traffic increases, we increase the load on the single server by increasing things like RAM, CPU or SSD. SQL databases are vertically scalable.


**Horizontal Scalability** : It means that as the traffic increases we do sharding or adding more servers in our NoSQL database. NoSQL databases are horizontally scalable.

<br>

## Advantages of NoSQL

1. **Flexible Schemas/Schema-less database** : A Flexible Schema allows us to easily make any changes to our database as per our requirements.

2. **Horizontal Scaling** : In case of SQL, as the capacity of the server exceeds then we need to scale up vertically .i.e. we increase the load on the same server by increasing RAM, CPU or SSD which is very expensive.
But in case of NoSQL, we scale horizontally i.e. we add cheaper servers to haddle the increasing traffic.

3. **Fast Queries** : Since SQL databases are normalized, so many a times we are required to join multiple tables and with the increase in the number of table to be joined it becomes expensive. However, in case of NoSQL, we don't need any joins because that **data that is accessed together are stored together**.

4. **Easy for developers** : Since NoSQL databases like MongoDB map their data structure to those of popular programming language, so making it easier for the developer since now they will have to store the data in the same way as they did in the application code.

<br>

## Disadvantages of NoSQL

1. They don't support ACID property.

2. It is not optimized for reducing data duplication.Hence can be larger than SQL databases.
Storage is currently cheap, so this is considered as a minor drawback.

3. 


<br>


## when to use what?
- When are having datas such that they are highy related to each other in that case we should use SQL, because its good at handling relationships between different tables.
When we aren't having datas that are highly related then we can use NoSQL.

- Also, when there are lots of missing values in our data then prefer using NoSQL, because in SQL since the data are represented in tabular format so it will insert NULL inplace of empty value which isn't suitable. 

- When we are having huge data in that case storing data in tabular format won't be possible because if we'll organize data in something like excel then on increasing data it will slow down and at point will stop working due to insufficient storage.
