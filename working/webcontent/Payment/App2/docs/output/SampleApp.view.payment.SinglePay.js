Ext.data.JsonP.SampleApp_view_payment_SinglePay({"tagname":"class","name":"SampleApp.view.payment.SinglePay","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"SinglePay.js","href":"SinglePay.html#SampleApp-view-payment-SinglePay"}],"aliases":{"widget":["att-payment-singlepay"]},"alternateClassNames":[],"extends":"Ext.Container","mixins":[],"requires":["Ext.form.FieldSet","Ext.form.Panel","SampleApp.Config","SampleApp.view.Footer","SampleApp.view.Header","ux.ListWindow"],"uses":[],"members":[{"name":"defaults","tagname":"cfg","owner":"SampleApp.view.payment.SinglePay","id":"cfg-defaults","meta":{"private":true}},{"name":"scrollable","tagname":"cfg","owner":"SampleApp.view.payment.SinglePay","id":"cfg-scrollable","meta":{"private":true}},{"name":"searchByField","tagname":"cfg","owner":"SampleApp.view.payment.SinglePay","id":"cfg-searchByField","meta":{"private":true}},{"name":"searchByValue","tagname":"cfg","owner":"SampleApp.view.payment.SinglePay","id":"cfg-searchByValue","meta":{"private":true}},{"name":"title","tagname":"cfg","owner":"SampleApp.view.payment.SinglePay","id":"cfg-title","meta":{"private":true}},{"name":"buildCreateTransactionForm","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-buildCreateTransactionForm","meta":{}},{"name":"buildRefundTransactionForm","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-buildRefundTransactionForm","meta":{}},{"name":"buildTpl","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-buildTpl","meta":{}},{"name":"buildTransactionStatusForm","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-buildTransactionStatusForm","meta":{"private":true}},{"name":"getDefaults","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-getDefaults","meta":{}},{"name":"getScrollable","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-getScrollable","meta":{}},{"name":"getSearchByField","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-getSearchByField","meta":{}},{"name":"getSearchByValue","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-getSearchByValue","meta":{}},{"name":"getTitle","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-getTitle","meta":{}},{"name":"initialize","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-initialize","meta":{"private":true}},{"name":"setDefaults","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-setDefaults","meta":{}},{"name":"setScrollable","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-setScrollable","meta":{}},{"name":"setSearchByField","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-setSearchByField","meta":{}},{"name":"setSearchByValue","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-setSearchByValue","meta":{}},{"name":"setTitle","tagname":"method","owner":"SampleApp.view.payment.SinglePay","id":"method-setTitle","meta":{}}],"code_type":"ext_define","id":"class-SampleApp.view.payment.SinglePay","component":false,"superclasses":["Ext.Container"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Container<div class='subclass '><strong>SampleApp.view.payment.SinglePay</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.form.FieldSet</div><div class='dependency'>Ext.form.Panel</div><div class='dependency'><a href='#!/api/SampleApp.Config' rel='SampleApp.Config' class='docClass'>SampleApp.Config</a></div><div class='dependency'><a href='#!/api/SampleApp.view.Footer' rel='SampleApp.view.Footer' class='docClass'>SampleApp.view.Footer</a></div><div class='dependency'><a href='#!/api/SampleApp.view.Header' rel='SampleApp.view.Header' class='docClass'>SampleApp.view.Header</a></div><div class='dependency'>ux.ListWindow</div><h4>Files</h4><div class='dependency'><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay' target='_blank'>SinglePay.js</a></div></pre><div class='doc-contents'><p>User Interface for the Single Pay application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaults' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-cfg-defaults' class='name expandable'>defaults</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{scrollable: null}</code></p></div></div></div><div id='cfg-scrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-cfg-scrollable' class='name expandable'>scrollable</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'vertical'</code></p></div></div></div><div id='cfg-searchByField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-searchByField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-cfg-searchByField' class='name expandable'>searchByField</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-searchByValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-searchByValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-cfg-searchByValue' class='name expandable'>searchByValue</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-cfg-title' class='name expandable'>title</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Single Payment App'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-buildCreateTransactionForm' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-method-buildCreateTransactionForm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-buildCreateTransactionForm' class='name expandable'>buildCreateTransactionForm</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the UI components for Feature 1: Create New Transaction. ...</div><div class='long'><p>Builds the UI components for Feature 1: Create New Transaction.</p>\n</div></div></div><div id='method-buildRefundTransactionForm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-method-buildRefundTransactionForm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-buildRefundTransactionForm' class='name expandable'>buildRefundTransactionForm</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the UI components for Feature 4: Refund Transaction. ...</div><div class='long'><p>Builds the UI components for Feature 4: Refund Transaction.</p>\n</div></div></div><div id='method-buildTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-method-buildTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-buildTpl' class='name expandable'>buildTpl</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the Ext.XTemplate used by the Refund List. ...</div><div class='long'><p>Builds the Ext.XTemplate used by the Refund List.</p>\n</div></div></div><div id='method-buildTransactionStatusForm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-method-buildTransactionStatusForm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-buildTransactionStatusForm' class='name expandable'>buildTransactionStatusForm</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getDefaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-getDefaults' class='name expandable'>getDefaults</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of defaults. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-defaults\" rel=\"SampleApp.view.payment.SinglePay-cfg-defaults\" class=\"docClass\">defaults</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-getScrollable' class='name expandable'>getScrollable</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of scrollable. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-scrollable\" rel=\"SampleApp.view.payment.SinglePay-cfg-scrollable\" class=\"docClass\">scrollable</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSearchByField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-searchByField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-getSearchByField' class='name expandable'>getSearchByField</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of searchByField. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-searchByField\" rel=\"SampleApp.view.payment.SinglePay-cfg-searchByField\" class=\"docClass\">searchByField</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSearchByValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-searchByValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-getSearchByValue' class='name expandable'>getSearchByValue</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of searchByValue. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-searchByValue\" rel=\"SampleApp.view.payment.SinglePay-cfg-searchByValue\" class=\"docClass\">searchByValue</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-getTitle' class='name expandable'>getTitle</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of title. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-title\" rel=\"SampleApp.view.payment.SinglePay-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>override ...</div><div class='long'><p>override</p>\n</div></div></div><div id='method-setDefaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-setDefaults' class='name expandable'>setDefaults</a>( <span class='pre'>defaults</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of defaults. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-defaults\" rel=\"SampleApp.view.payment.SinglePay-cfg-defaults\" class=\"docClass\">defaults</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>defaults</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setScrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-setScrollable' class='name expandable'>setScrollable</a>( <span class='pre'>scrollable</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of scrollable. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-scrollable\" rel=\"SampleApp.view.payment.SinglePay-cfg-scrollable\" class=\"docClass\">scrollable</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scrollable</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setSearchByField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-searchByField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-setSearchByField' class='name expandable'>setSearchByField</a>( <span class='pre'>searchByField</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of searchByField. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-searchByField\" rel=\"SampleApp.view.payment.SinglePay-cfg-searchByField\" class=\"docClass\">searchByField</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>searchByField</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setSearchByValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-searchByValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-setSearchByValue' class='name expandable'>setSearchByValue</a>( <span class='pre'>searchByValue</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of searchByValue. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-searchByValue\" rel=\"SampleApp.view.payment.SinglePay-cfg-searchByValue\" class=\"docClass\">searchByValue</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>searchByValue</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.SinglePay'>SampleApp.view.payment.SinglePay</span><br/><a href='source/SinglePay.html#SampleApp-view-payment-SinglePay-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.SinglePay-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>title</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of title. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.SinglePay-cfg-title\" rel=\"SampleApp.view.payment.SinglePay-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});