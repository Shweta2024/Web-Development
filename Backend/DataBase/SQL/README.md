# CRUD
**C**reate
**R**ead
**U**pdate
**D**elete

## Create

### 1) create a table

```sql

CREATE TABLE table_name(
                            column1 datatype,
                            column2 datatype.
                            column3 datatype,
                            PRIMARY KEY (column1)
)
```

![image](https://user-images.githubusercontent.com/75883328/206928556-d5d1e364-4153-49bd-98ee-7ce6e6483bac.png)

<br>

### 2) Insert values into a table

```sql

INSERT INTO table_name VALUES (value1, value2, value3)

```

![image](https://user-images.githubusercontent.com/75883328/206928741-eed1b026-27f1-47ce-88f3-052607b28a1d.png)


### Insert values in specific columns

```sql

INSERT INTO table_name (column1,column3)
VALUES (value1,value3)

```
**note** :- the column whose value we haven't specified will be set as NULL. 
![image](https://user-images.githubusercontent.com/75883328/206930200-fa46add3-33bc-49f8-81cc-75bf1f830aad.png)


<br>

### 3) Display the table/ show all the values of the table

```sql

SELECT * FROM table_name

```

![image](https://user-images.githubusercontent.com/75883328/206928804-d0c36dc1-7ede-4b25-962d-3bdefdf0f264.png)

<br>

## Read

### 1) reading **all** the values

```sql

SELECT * FROM table_name

```

![image](https://user-images.githubusercontent.com/75883328/206930943-425086c8-335c-4fc7-af09-f1ce72acc271.png)

<br>


### 2) reading specific **columns**

```sql

SELECT column1,column3 from table_name

```

![image](https://user-images.githubusercontent.com/75883328/206930792-c6ed06de-b1fe-48c8-8651-c8f4b44fc956.png)

<br>


### 3) reading a specific **row**

```sql

SELECT * FROM table_name where condition

```

![image](https://user-images.githubusercontent.com/75883328/206931074-7f4511c1-b23c-4052-b30e-f960aadbe391.png)

<br>

## Update

### 1) update value of a specific row

```sql

UPDATE table_name 
SET column3 = value3
WHERE condition

```

![image](https://user-images.githubusercontent.com/75883328/206931307-372e5595-a304-45eb-a728-2a3f7340e746.png)

<br>

### 2) update all the values of a specific column

```sql

UPDATE table_name
SET column3 = value3

```
![image](https://user-images.githubusercontent.com/75883328/206931455-63d966cc-e979-4e3e-a9cc-371c85490e13.png)

### 3) ADD a new column to the table

```sql

ALTER TABLE table_name
ADD column4 datatype

```

![image](https://user-images.githubusercontent.com/75883328/206931607-2eb650a4-845a-4819-b560-9fbee6f94210.png)

<br>

## Delete

### 1) deleting a specific column

```sql

DELETE FROM table_name
WHERE condition

```

![image](https://user-images.githubusercontent.com/75883328/206931966-5e425a74-8dad-4ef8-ae65-4c4445ce0b4c.png)

<br>

### 2) deleting a column

```sql

ALTER TABLE table_name
DROP column4

```

![image](https://user-images.githubusercontent.com/75883328/206932030-3a9e8395-ae08-4a35-9df7-2ff94a8c5521.png)

#### EXTRA

- table using foreign key

![image](https://user-images.githubusercontent.com/75883328/206932572-5f1b6357-b538-49a8-9c73-adaee524bc27.png)
