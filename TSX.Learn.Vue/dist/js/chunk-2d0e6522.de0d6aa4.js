(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6522"],{"97f4":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-content"},[i("b-card",[i("div",{staticClass:"d-sm-flex mb-5"},[i("span",{staticClass:"m-auto"}),i("b-button",{attrs:{variant:"outline-danger mr-3 mb-3"},on:{click:t.backInvoice}},[t._v("Back To Invoices")]),i("b-button",{attrs:{variant:"outline-danger mr-3 mb-3"},on:{click:t.editInvoice}},[t._v("Edit Invoice")]),i("b-button",{attrs:{variant:"primary mr-3 mb-3"},on:{click:t.print}},[t._v("print Invoice")])],1),i("div",{ref:"printArea",staticClass:"print-area",attrs:{id:"print-area"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("h4",{staticClass:"font-weight-bold"},[t._v("Order Info")]),i("p",[t._v(t._s(t.getNewInvoice.invoiceId))])]),i("b-col",{staticClass:"text-sm-right",attrs:{md:"6"}},[i("p",[i("strong",[t._v("Order status: ")]),i("span",[t._v(t._s(t.getNewInvoice.status))])]),i("p",[i("strong",[t._v(" Order date: ")]),t._v(" "+t._s(t.getNewInvoice.date)+" ")])])],1),i("div",{staticClass:"mt-3 mb-30 border-top"}),i("b-row",{staticClass:"mb-5"},[i("b-col",{staticClass:"mb-3 mb-sm-0",attrs:{md:"6"}},[i("h5",{staticClass:"font-weight-bold"},[t._v("Bill From")]),i("p",[t._v(t._s(t.getNewInvoice.billFrom))]),i("span",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.getNewInvoice.billFromAddress)+" ")])]),i("b-col",{staticClass:"text-sm-right",attrs:{md:"6"}},[i("h5",{staticClass:"font-weight-bold"},[t._v("Bill To")]),i("p",[t._v(t._s(t.getNewInvoice.billTo))]),i("span",{staticStyle:{"white-space":"pre-line"}},[t._v(" "+t._s(t.getNewInvoice.billToAddress)+" ")])])],1),i("b-row",[i("b-col",{staticClass:"table-responsive",attrs:{md:"12"}},[i("b-table",{attrs:{hover:"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"index",fn:function(e){return[i("p",{staticClass:"font-weight-bold"},[t._v(t._s(e.index+1))])]}},{key:"itemName",fn:function(e){return[t._v(" "+t._s(e.item.first_name)+" ")]}},{key:"unitPrice",fn:function(e){return[t._v(" "+t._s(e.item.first_name)+" ")]}},{key:"unit",fn:function(e){return[t._v(" "+t._s(e.item.first_name)+" ")]}}])},[i("template",{slot:"cost"},[t._v(" 0 ")])],2)],1),i("b-col",{attrs:{md:"12"}},[i("div",{staticClass:"invoice-summary float-right"},[i("p",[t._v(" Sub total: "),i("span",[t._v("44")])]),i("p",[t._v(" Vat: "),i("span",[t._v(" 5.28 ")])]),i("h5",{staticClass:"font-weight-bold"},[t._v(" Grand Total: "),i("span",[t._v(" 49.28 ")])])])])],1)],1)])],1)},n=[],a=i("5530"),o=i("ade3"),c=i("2f62"),r={metaInfo:{title:"Print Invoice"},data:function(){var t;return t={fields:["index","itemName","unitPrice","unit","cost","action"],items:[{itemName:"",unitPrice:"",unit:"",cost:0}]},Object(o["a"])(t,"fields",["index","itemName","unitPrice","unit","cost"]),Object(o["a"])(t,"items",[{age:40,first_name:"Dickerson",last_name:"Macdonald"},{age:40,first_name:"Dickerson",last_name:"Macdonald"}]),t},computed:Object(c["c"])(["getNewInvoice"]),methods:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["addInvoice","editInvoice"])),{},{getInvoice:function(){},addInvoice:function(){this.addInvoice()},backInvoice:function(){this.$router.push("/app/apps/invoice")},print:function(){window.print()}})},l=r,d=i("2877"),v=Object(d["a"])(l,s,n,!1,null,null,null);e["default"]=v.exports}}]);