CREATE DATABASE MQRG;
use MQRG

CREATE TABLE clientes(
ID_cliente int IDENTITY(1,1),
cedula int not null,
Nombre varchar(30) not null,
Apellido1 varchar(30),
Apellido2 varchar(30),
constraint PK_ID_cliente primary key (ID_cliente),
);
drop table productos

CREATE TABLE productos(
ID_producto int IDENTITY(1,1),--añadir la column de Id
Nombre_vehiculo varchar(50),
precio int not null,
Descripcion varchar(250),
Cantidad_disponible int,
constraint PK_ID_producto primary key (ID_producto),
);


CREATE TABLE pedidos(
ID_pedido int IDENTITY(1,1),
Fecha_de_entrega date not null,
Total int not null,
constraint PK_ID_pedido primary key (ID_pedido),
);


CREATE TABLE Detalles_pedido(
ID int IDENTITY(1,1) not null,
ID_pedido int,
ID_producto int,
Total int not null,
constraint PK_ID_Detalle_pedido primary key (ID),
constraint FK_ID_pedido foreign key (ID_pedido) references pedidos (ID_pedido),
constraint FK_ID_producto foreign key (ID_producto) references productos (ID_producto),
);


CREATE TABLE pago(
ID_cliente int IDENTITY(1,1),
ID_Detalle_pedido int,
Total int not null,
constraint FK_ID_cliente foreign key (ID_cliente) references clientes (ID_cliente),
constraint FK_ID_Detalle_pedido foreign key (ID_Detalle_pedido) references Detalles_pedido (ID),
);