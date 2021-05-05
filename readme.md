## 登录
### 字段需求
经过测试，只需要`_nano_fp`字段（缺失会返回存在风险）和`_bee`字段（缺失需要手机验证）。

### uninstall modoboa
- [How do I uninstall this? · Issue #157 · modoboa/modoboa-installer](https://github.com/modoboa/modoboa-installer/issues/157)


### 评价数据的数据结构

评价数据的数据获取方式与其他api都有些差异。

具体地说，它分为列表查询和单品查询两个api，其中列表查询可以获得多个单品当日的较为详细的数据（但不支持选择日期，参数中没有此项），而单品查询却可以直接查到近30日的数据，包含以下最关键的几个字段：
```text
statDate	String	2021-05-04
avgServRevScr1m	Number	4.572659912293966
avgDescRevScr1m	Number	4.570391652805081
avgLgstRevScr1m	Number	4.573113564191743
goodsUnfkUndfltRevCnt1m	Integer	6613
```
但是，其他字段的信息就没有了。

