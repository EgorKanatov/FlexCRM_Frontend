(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'flexcrm-kotlin-js-demo'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'flexcrm-kotlin-js-demo'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'flexcrm-kotlin-js-demo'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'flexcrm-kotlin-js-demo'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'flexcrm-kotlin-js-demo'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'flexcrm-kotlin-js-demo'.");
    }
    globalThis['flexcrm-kotlin-js-demo'] = factory(typeof globalThis['flexcrm-kotlin-js-demo'] === 'undefined' ? {} : globalThis['flexcrm-kotlin-js-demo'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_IAE = kotlin_kotlin.$_$.y9;
  var enumEntries = kotlin_kotlin.$_$.n6;
  var Unit_getInstance = kotlin_kotlin.$_$.j2;
  var Enum = kotlin_kotlin.$_$.n9;
  var protoOf = kotlin_kotlin.$_$.q8;
  var initMetadataForClass = kotlin_kotlin.$_$.u7;
  var VOID = kotlin_kotlin.$_$.c;
  var equals = kotlin_kotlin.$_$.q7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.pa;
  var initMetadataForInterface = kotlin_kotlin.$_$.x7;
  var CoroutineImpl = kotlin_kotlin.$_$.k6;
  var Long = kotlin_kotlin.$_$.s9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u5;
  var toList = kotlin_kotlin.$_$.p5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.w7;
  var fromInt = kotlin_kotlin.$_$.x6;
  var Collection = kotlin_kotlin.$_$.w3;
  var isInterface = kotlin_kotlin.$_$.i8;
  var checkCountOverflow = kotlin_kotlin.$_$.n4;
  var mutableListOf = kotlin_kotlin.$_$.j5;
  var initMetadataForObject = kotlin_kotlin.$_$.z7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v7;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.x9;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var objectCreate = kotlin_kotlin.$_$.p8;
  var getStringHashCode = kotlin_kotlin.$_$.s7;
  var equalsLong = kotlin_kotlin.$_$.w6;
  var makeAssociatedObjectMapES5 = kotlin_kotlin.$_$.b;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var listOf = kotlin_kotlin.$_$.h5;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var initMetadataForLambda = kotlin_kotlin.$_$.y7;
  var constructCallableReference = kotlin_kotlin.$_$.o7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.o6;
  var isBlank = kotlin_kotlin.$_$.f9;
  var SuspendFunction1 = kotlin_kotlin.$_$.l6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n2;
  var toIntOrNull = kotlin_kotlin.$_$.i9;
  var charSequenceLength = kotlin_kotlin.$_$.m7;
  var isCharSequence = kotlin_kotlin.$_$.e8;
  var reversed = kotlin_kotlin.$_$.h9;
  var toString = kotlin_kotlin.$_$.s8;
  var chunked = kotlin_kotlin.$_$.e9;
  var joinToString = kotlin_kotlin.$_$.f5;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Page, 'Page', VOID, Enum);
  initMetadataForInterface(CrmRepository, 'CrmRepository', VOID, VOID, VOID, [0, 1]);
  initMetadataForClass(DashboardStatsDto, 'DashboardStatsDto');
  initMetadataForCoroutine($getClientsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($addClientCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getDealsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getDashboardStatsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($addDealCOROUTINE$, CoroutineImpl);
  initMetadataForObject(MockCrmRepository, 'MockCrmRepository', VOID, VOID, [CrmRepository], [0, 1]);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ClientDto, 'ClientDto', VOID, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance]));
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DealDto, 'DealDto', VOID, VOID, VOID, VOID, VOID, makeAssociatedObjectMapES5([SerializableWith, $serializer_getInstance_0]));
  initMetadataForObject(MockData, 'MockData');
  initMetadataForClass(Client, 'Client');
  initMetadataForClass(Deal, 'Deal');
  initMetadataForLambda(renderClients$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(showAddClientModal$lambda$lambda$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(renderDashboard$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(renderDeals$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(showAddDealModal$lambda$lambda$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function set_currentPage(_set____db54di) {
    _init_properties_Main_kt__xi25uv();
    currentPage = _set____db54di;
  }
  function get_currentPage() {
    _init_properties_Main_kt__xi25uv();
    return currentPage;
  }
  var currentPage;
  var Page_DASHBOARD_instance;
  var Page_CLIENTS_instance;
  var Page_DEALS_instance;
  var Page_PROFILE_instance;
  function values() {
    return [Page_DASHBOARD_getInstance(), Page_CLIENTS_getInstance(), Page_DEALS_getInstance(), Page_PROFILE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'DASHBOARD':
        return Page_DASHBOARD_getInstance();
      case 'CLIENTS':
        return Page_CLIENTS_getInstance();
      case 'DEALS':
        return Page_DEALS_getInstance();
      case 'PROFILE':
        return Page_PROFILE_getInstance();
      default:
        Page_initEntries();
        THROW_IAE('No enum constant crm.Page.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Page_entriesInitialized;
  function Page_initEntries() {
    if (Page_entriesInitialized)
      return Unit_getInstance();
    Page_entriesInitialized = true;
    Page_DASHBOARD_instance = new Page('DASHBOARD', 0);
    Page_CLIENTS_instance = new Page('CLIENTS', 1);
    Page_DEALS_instance = new Page('DEALS', 2);
    Page_PROFILE_instance = new Page('PROFILE', 3);
  }
  var $ENTRIES;
  function Page(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function main() {
    _init_properties_Main_kt__xi25uv();
    renderApp();
  }
  function renderApp() {
    _init_properties_Main_kt__xi25uv();
    var tmp0_elvis_lhs = document.getElementById('root');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var root = tmp;
    root.innerHTML = '';
    var app = div('app', renderApp$lambda);
    root.appendChild(app);
  }
  function sidebar() {
    _init_properties_Main_kt__xi25uv();
    return tag('aside', 'sidebar', sidebar$lambda);
  }
  function navButton(label, page) {
    _init_properties_Main_kt__xi25uv();
    // Inline function 'kotlin.apply' call
    var this_0 = button(label, 'nav-item', navButton$lambda(page));
    if (equals(page, get_currentPage())) {
      this_0.className = this_0.className + ' active';
    }
    return this_0;
  }
  function topbar() {
    _init_properties_Main_kt__xi25uv();
    return tag('header', 'topbar', topbar$lambda);
  }
  function renderApp$lambda($this$div) {
    _init_properties_Main_kt__xi25uv();
    $this$div.appendChild(sidebar());
    $this$div.appendChild(tag('main', 'main', renderApp$lambda$lambda));
    return Unit_getInstance();
  }
  function renderApp$lambda$lambda($this$tag) {
    _init_properties_Main_kt__xi25uv();
    $this$tag.appendChild(topbar());
    $this$tag.appendChild(tag('section', 'content', renderApp$lambda$lambda$lambda));
    return Unit_getInstance();
  }
  function renderApp$lambda$lambda$lambda($this$tag) {
    _init_properties_Main_kt__xi25uv();
    switch (get_currentPage().get_ordinal_ip24qg_k$()) {
      case 0:
        $this$tag.appendChild(renderDashboard());
        break;
      case 1:
        $this$tag.appendChild(renderClients());
        break;
      case 2:
        $this$tag.appendChild(renderDeals());
        break;
      case 3:
        $this$tag.appendChild(renderProfile());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return Unit_getInstance();
  }
  function sidebar$lambda($this$tag) {
    _init_properties_Main_kt__xi25uv();
    $this$tag.appendChild(div('brand', sidebar$lambda$lambda));
    $this$tag.appendChild(tag('nav', 'nav', sidebar$lambda$lambda_0));
    return Unit_getInstance();
  }
  function sidebar$lambda$lambda($this$div) {
    _init_properties_Main_kt__xi25uv();
    $this$div.textContent = 'FlexCRM';
    return Unit_getInstance();
  }
  function sidebar$lambda$lambda_0($this$tag) {
    _init_properties_Main_kt__xi25uv();
    $this$tag.appendChild(navButton('\uD83C\uDFE0  \u0413\u043B\u0430\u0432\u043D\u0430\u044F', Page_DASHBOARD_getInstance()));
    $this$tag.appendChild(navButton('\uD83D\uDC65  \u041A\u043B\u0438\u0435\u043D\u0442\u044B', Page_CLIENTS_getInstance()));
    $this$tag.appendChild(navButton('\uD83D\uDCBC  \u0421\u0434\u0435\u043B\u043A\u0438', Page_DEALS_getInstance()));
    $this$tag.appendChild(navButton('\u2705  \u0417\u0430\u0434\u0430\u0447\u0438', null));
    $this$tag.appendChild(navButton('\uD83D\uDD3B  \u0412\u043E\u0440\u043E\u043D\u043A\u0438', null));
    $this$tag.appendChild(navButton('\u2699\uFE0F  \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438', null));
    return Unit_getInstance();
  }
  function navButton$lambda($page) {
    return function () {
      var tmp;
      if (!($page == null)) {
        set_currentPage($page);
        renderApp();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function topbar$lambda($this$tag) {
    _init_properties_Main_kt__xi25uv();
    // Inline function 'kotlin.apply' call
    var this_0 = tag('input', 'search');
    this_0.setAttribute('placeholder', '\u041F\u043E\u0438\u0441\u043A...');
    $this$tag.appendChild(this_0);
    $this$tag.appendChild(div('user', topbar$lambda$lambda));
    return Unit_getInstance();
  }
  function topbar$lambda$lambda($this$div) {
    _init_properties_Main_kt__xi25uv();
    $this$div.appendChild(div('avatar', topbar$lambda$lambda$lambda));
    $this$div.appendChild(div(VOID, topbar$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function topbar$lambda$lambda$lambda($this$div) {
    _init_properties_Main_kt__xi25uv();
    $this$div.textContent = 'E';
    return Unit_getInstance();
  }
  function topbar$lambda$lambda$lambda_0($this$div) {
    _init_properties_Main_kt__xi25uv();
    $this$div.appendChild(tag('strong', VOID, topbar$lambda$lambda$lambda$lambda));
    $this$div.appendChild(div('muted', topbar$lambda$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function topbar$lambda$lambda$lambda$lambda($this$tag) {
    _init_properties_Main_kt__xi25uv();
    $this$tag.textContent = '\u0415\u0433\u043E\u0440 \u0418\u0432\u0430\u043D\u043E\u0432';
    return Unit_getInstance();
  }
  function topbar$lambda$lambda$lambda$lambda_0($this$div) {
    _init_properties_Main_kt__xi25uv();
    $this$div.textContent = '\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440';
    return Unit_getInstance();
  }
  function Page_DASHBOARD_getInstance() {
    Page_initEntries();
    return Page_DASHBOARD_instance;
  }
  function Page_CLIENTS_getInstance() {
    Page_initEntries();
    return Page_CLIENTS_instance;
  }
  function Page_DEALS_getInstance() {
    Page_initEntries();
    return Page_DEALS_instance;
  }
  function Page_PROFILE_getInstance() {
    Page_initEntries();
    return Page_PROFILE_instance;
  }
  var properties_initialized_Main_kt_gqj46d;
  function _init_properties_Main_kt__xi25uv() {
    if (!properties_initialized_Main_kt_gqj46d) {
      properties_initialized_Main_kt_gqj46d = true;
      currentPage = Page_DEALS_getInstance();
    }
  }
  function mainWrapper() {
    main();
  }
  function CrmRepository() {
  }
  function DashboardStatsDto(clientsCount, dealsCount, activeDealsCount, tasksTodayCount) {
    this.clientsCount_1 = clientsCount;
    this.dealsCount_1 = dealsCount;
    this.activeDealsCount_1 = activeDealsCount;
    this.tasksTodayCount_1 = tasksTodayCount;
  }
  protoOf(DashboardStatsDto).get_clientsCount_4qxcy8_k$ = function () {
    return this.clientsCount_1;
  };
  protoOf(DashboardStatsDto).get_dealsCount_6tc029_k$ = function () {
    return this.dealsCount_1;
  };
  protoOf(DashboardStatsDto).get_activeDealsCount_9f9dc9_k$ = function () {
    return this.activeDealsCount_1;
  };
  protoOf(DashboardStatsDto).get_tasksTodayCount_lhh7x_k$ = function () {
    return this.tasksTodayCount_1;
  };
  protoOf(DashboardStatsDto).component1_7eebsc_k$ = function () {
    return this.clientsCount_1;
  };
  protoOf(DashboardStatsDto).component2_7eebsb_k$ = function () {
    return this.dealsCount_1;
  };
  protoOf(DashboardStatsDto).component3_7eebsa_k$ = function () {
    return this.activeDealsCount_1;
  };
  protoOf(DashboardStatsDto).component4_7eebs9_k$ = function () {
    return this.tasksTodayCount_1;
  };
  protoOf(DashboardStatsDto).copy_my5h57_k$ = function (clientsCount, dealsCount, activeDealsCount, tasksTodayCount) {
    return new DashboardStatsDto(clientsCount, dealsCount, activeDealsCount, tasksTodayCount);
  };
  protoOf(DashboardStatsDto).copy$default_sp93un_k$ = function (clientsCount, dealsCount, activeDealsCount, tasksTodayCount, $super) {
    clientsCount = clientsCount === VOID ? this.clientsCount_1 : clientsCount;
    dealsCount = dealsCount === VOID ? this.dealsCount_1 : dealsCount;
    activeDealsCount = activeDealsCount === VOID ? this.activeDealsCount_1 : activeDealsCount;
    tasksTodayCount = tasksTodayCount === VOID ? this.tasksTodayCount_1 : tasksTodayCount;
    return $super === VOID ? this.copy_my5h57_k$(clientsCount, dealsCount, activeDealsCount, tasksTodayCount) : $super.copy_my5h57_k$.call(this, clientsCount, dealsCount, activeDealsCount, tasksTodayCount);
  };
  protoOf(DashboardStatsDto).toString = function () {
    return 'DashboardStatsDto(clientsCount=' + this.clientsCount_1 + ', dealsCount=' + this.dealsCount_1 + ', activeDealsCount=' + this.activeDealsCount_1 + ', tasksTodayCount=' + this.tasksTodayCount_1 + ')';
  };
  protoOf(DashboardStatsDto).hashCode = function () {
    var result = this.clientsCount_1;
    result = imul(result, 31) + this.dealsCount_1 | 0;
    result = imul(result, 31) + this.activeDealsCount_1 | 0;
    result = imul(result, 31) + this.tasksTodayCount_1 | 0;
    return result;
  };
  protoOf(DashboardStatsDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DashboardStatsDto))
      return false;
    if (!(this.clientsCount_1 === other.clientsCount_1))
      return false;
    if (!(this.dealsCount_1 === other.dealsCount_1))
      return false;
    if (!(this.activeDealsCount_1 === other.activeDealsCount_1))
      return false;
    if (!(this.tasksTodayCount_1 === other.tasksTodayCount_1))
      return false;
    return true;
  };
  function _get_mockClients__7xodl9($this) {
    return $this.mockClients_1;
  }
  function _get_mockDeals__hgigj0($this) {
    return $this.mockDeals_1;
  }
  function $getClientsCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getClientsCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(200, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return toList(this._this__u8e3s4__1.mockClients_1);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $addClientCOROUTINE$(_this__u8e3s4, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.client_1 = client;
  }
  protoOf($addClientCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(300, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newClient = this.client_1.copy$default_p99zjo_k$(fromInt(this._this__u8e3s4__1.mockClients_1.get_size_woubt6_k$() + 1 | 0));
            this._this__u8e3s4__1.mockClients_1.add_dl6gt3_k$(0, newClient);
            return newClient;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $getDealsCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getDealsCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(200, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this._this__u8e3s4__1.mockDeals_1;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $getDashboardStatsCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getDashboardStatsCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(150, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var currentClientsCount = this._this__u8e3s4__1.mockClients_1.get_size_woubt6_k$();
            var currentDealsCount = this._this__u8e3s4__1.mockDeals_1.get_size_woubt6_k$();
            var tmp0 = this._this__u8e3s4__1.mockDeals_1;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp_0;
              if (isInterface(tmp0, Collection)) {
                tmp_0 = tmp0.isEmpty_y1axqb_k$();
              } else {
                tmp_0 = false;
              }
              if (tmp_0) {
                tmp$ret$0 = 0;
                break l$ret$1;
              }
              var count = 0;
              var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
              while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
                var element = _iterator__ex2g4s.next_20eer_k$();
                if (!(element.get_stage_iypwwl_k$() === '\u0423\u0441\u043F\u0435\u0445')) {
                  count = count + 1 | 0;
                  checkCountOverflow(count);
                }
              }
              tmp$ret$0 = count;
            }
             while (false);
            var currentActiveDeals = tmp$ret$0;
            var currentTasksToday = 6;
            return new DashboardStatsDto(currentClientsCount, currentDealsCount, currentActiveDeals, currentTasksToday);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $addDealCOROUTINE$(_this__u8e3s4, deal, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.deal_1 = deal;
  }
  protoOf($addDealCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(300, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newDeal = this.deal_1.copy$default_hrethx_k$(fromInt(this._this__u8e3s4__1.mockDeals_1.get_size_woubt6_k$() + 1 | 0));
            this._this__u8e3s4__1.mockDeals_1.add_dl6gt3_k$(0, newDeal);
            return newDeal;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function MockCrmRepository() {
    MockCrmRepository_instance = this;
    this.mockClients_1 = mutableListOf([new ClientDto(new Long(1, 0), '\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432', '\u041E\u041E\u041E \u0410\u043B\u044C\u0444\u0430', '+7 912 345-67-89', 'ivan@alfa.ru', '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439', '\u0411\u0443\u043B\u0430\u0442'), new ClientDto(new Long(2, 0), '\u0410\u043D\u043D\u0430 \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430', '\u0418\u041F \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430', '+7 987 654-32-10', 'anna@mail.ru', '\u041B\u0438\u0434', '\u0415\u0433\u043E\u0440'), new ClientDto(new Long(3, 0), '\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041A\u043E\u0437\u043B\u043E\u0432', 'TechSoft', '+7 900 111-22-33', 'dk@techsoft.ru', '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439', '\u042F\u0440\u0438\u043A'), new ClientDto(new Long(4, 0), '\u041E\u043B\u044C\u0433\u0430 \u0412\u043E\u043B\u043A\u043E\u0432\u0430', '\u041E\u041E\u041E \u0411\u0435\u0442\u0430', '+7 955 123-45-67', 'olga@beta.ru', '\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439', '\u0411\u0443\u043B\u0430\u0442'), new ClientDto(new Long(5, 0), '\u041C\u0430\u0440\u0438\u044F \u041A\u0443\u0437\u043D\u0435\u0446\u043E\u0432\u0430', '\u041E\u041E\u041E \u0413\u0430\u043C\u043C\u0430', '+7 903 333-44-55', 'maria@gamma.ru', '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439', '\u042F\u0440\u0438\u043A')]);
    this.mockDeals_1 = mutableListOf([new DealDto(new Long(1, 0), '\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u0430', '\u041E\u041E\u041E \u0420\u043E\u043C\u0430\u0448\u043A\u0430', 120000, '\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432', '\u041D\u043E\u0432\u044B\u0439 \u043B\u0438\u0434', '12.09.2026'), new DealDto(new Long(2, 0), '\u0410\u0443\u0434\u0438\u0442', '\u0418\u041F \u0421\u0438\u0434\u043E\u0440\u043E\u0432', 80000, '\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u0438\u0434\u043E\u0440\u043E\u0432', '\u041D\u043E\u0432\u044B\u0439 \u043B\u0438\u0434', '11.09.2026'), new DealDto(new Long(3, 0), '\u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u041F\u041E', '\u041E\u041E\u041E \u0422\u0435\u0445\u043D\u043E', 220000, '\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041A\u043E\u0437\u043B\u043E\u0432', '\u041D\u043E\u0432\u044B\u0439 \u043B\u0438\u0434', '10.09.2026'), new DealDto(new Long(4, 0), '\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F', '\u0418\u041F \u041F\u0435\u0442\u0440\u043E\u0432', 150000, '\u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432', '\u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D', '10.09.2026'), new DealDto(new Long(5, 0), '\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438', '\u041E\u041E\u041E \u0412\u0435\u043A\u0442\u043E\u0440', 130000, '\u0410\u043D\u043D\u0430 \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430', '\u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D', '09.09.2026'), new DealDto(new Long(6, 0), '\u0412\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 CRM', 'TechSoft', 240000, '\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041A\u043E\u0437\u043B\u043E\u0432', '\u041F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u044B', '12.09.2026'), new DealDto(new Long(7, 0), '\u0421\u0435\u0440\u0432\u0435\u0440\u044B', '\u041E\u041E\u041E \u0411\u0435\u0442\u0430', 80000, '\u041E\u043B\u044C\u0433\u0430 \u0412\u043E\u043B\u043A\u043E\u0432\u0430', '\u041F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u044B', '11.09.2026'), new DealDto(new Long(8, 0), '\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430', '\u041E\u041E\u041E \u0410\u043B\u044C\u0444\u0430', 120000, '\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432', '\u0414\u043E\u0433\u043E\u0432\u043E\u0440', '10.09.2026'), new DealDto(new Long(9, 0), '\u0414\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430', '\u041E\u041E\u041E \u0413\u0430\u043C\u043C\u0430', 240000, '\u041C\u0430\u0440\u0438\u044F \u041A\u0443\u0437\u043D\u0435\u0446\u043E\u0432\u0430', '\u0423\u0441\u043F\u0435\u0445', '08.09.2026')]);
  }
  protoOf(MockCrmRepository).getClients_z0bdlp_k$ = function ($completion) {
    var tmp = new $getClientsCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MockCrmRepository).addClient_z959qt_k$ = function (client, $completion) {
    var tmp = new $addClientCOROUTINE$(this, client, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MockCrmRepository).getDeals_gg3wj_k$ = function ($completion) {
    var tmp = new $getDealsCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MockCrmRepository).getDashboardStats_hlyro2_k$ = function ($completion) {
    var tmp = new $getDashboardStatsCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MockCrmRepository).addDeal_8ro96e_k$ = function (deal, $completion) {
    var tmp = new $addDealCOROUTINE$(this, deal, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  var MockCrmRepository_instance;
  function MockCrmRepository_getInstance() {
    if (MockCrmRepository_instance == null)
      new MockCrmRepository();
    return MockCrmRepository_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('crm.api.ClientDto', this, 7);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('company', false);
    tmp0_serialDesc.addElement_5pzumi_k$('phone', false);
    tmp0_serialDesc.addElement_5pzumi_k$('email', false);
    tmp0_serialDesc.addElement_5pzumi_k$('status', false);
    tmp0_serialDesc.addElement_5pzumi_k$('responsibleUser', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_j2fy53_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeLongElement_cega27_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.name_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 2, value.company_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 3, value.phone_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 4, value.email_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 5, value.status_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 6, value.responsibleUser_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_j2fy53_k$(encoder, value instanceof ClientDto ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = new Long(0, 0);
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp11_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp11_input.decodeLongElement_994anb_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.decodeLongElement_994anb_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.endStructure_1xqz0n_k$(tmp0_desc);
    return ClientDto_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ClientDto_init_$Init$(seen0, id, name, company, phone, email, status, responsibleUser, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen0))) {
      throwMissingFieldException(seen0, 127, $serializer_getInstance().descriptor_1);
    }
    $this.id_1 = id;
    $this.name_1 = name;
    $this.company_1 = company;
    $this.phone_1 = phone;
    $this.email_1 = email;
    $this.status_1 = status;
    $this.responsibleUser_1 = responsibleUser;
    return $this;
  }
  function ClientDto_init_$Create$(seen0, id, name, company, phone, email, status, responsibleUser, serializationConstructorMarker) {
    return ClientDto_init_$Init$(seen0, id, name, company, phone, email, status, responsibleUser, serializationConstructorMarker, objectCreate(protoOf(ClientDto)));
  }
  function ClientDto(id, name, company, phone, email, status, responsibleUser) {
    Companion_getInstance();
    this.id_1 = id;
    this.name_1 = name;
    this.company_1 = company;
    this.phone_1 = phone;
    this.email_1 = email;
    this.status_1 = status;
    this.responsibleUser_1 = responsibleUser;
  }
  protoOf(ClientDto).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ClientDto).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ClientDto).get_company_gzg49g_k$ = function () {
    return this.company_1;
  };
  protoOf(ClientDto).get_phone_iwv5tx_k$ = function () {
    return this.phone_1;
  };
  protoOf(ClientDto).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(ClientDto).get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  protoOf(ClientDto).get_responsibleUser_5a5c7c_k$ = function () {
    return this.responsibleUser_1;
  };
  protoOf(ClientDto).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(ClientDto).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(ClientDto).component3_7eebsa_k$ = function () {
    return this.company_1;
  };
  protoOf(ClientDto).component4_7eebs9_k$ = function () {
    return this.phone_1;
  };
  protoOf(ClientDto).component5_7eebs8_k$ = function () {
    return this.email_1;
  };
  protoOf(ClientDto).component6_7eebs7_k$ = function () {
    return this.status_1;
  };
  protoOf(ClientDto).component7_7eebs6_k$ = function () {
    return this.responsibleUser_1;
  };
  protoOf(ClientDto).copy_30logp_k$ = function (id, name, company, phone, email, status, responsibleUser) {
    return new ClientDto(id, name, company, phone, email, status, responsibleUser);
  };
  protoOf(ClientDto).copy$default_p99zjo_k$ = function (id, name, company, phone, email, status, responsibleUser, $super) {
    id = id === VOID ? this.id_1 : id;
    name = name === VOID ? this.name_1 : name;
    company = company === VOID ? this.company_1 : company;
    phone = phone === VOID ? this.phone_1 : phone;
    email = email === VOID ? this.email_1 : email;
    status = status === VOID ? this.status_1 : status;
    responsibleUser = responsibleUser === VOID ? this.responsibleUser_1 : responsibleUser;
    return $super === VOID ? this.copy_30logp_k$(id, name, company, phone, email, status, responsibleUser) : $super.copy_30logp_k$.call(this, id, name, company, phone, email, status, responsibleUser);
  };
  protoOf(ClientDto).toString = function () {
    return 'ClientDto(id=' + this.id_1.toString() + ', name=' + this.name_1 + ', company=' + this.company_1 + ', phone=' + this.phone_1 + ', email=' + this.email_1 + ', status=' + this.status_1 + ', responsibleUser=' + this.responsibleUser_1 + ')';
  };
  protoOf(ClientDto).hashCode = function () {
    var result = this.id_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.company_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.phone_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.email_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.status_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.responsibleUser_1) | 0;
    return result;
  };
  protoOf(ClientDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ClientDto))
      return false;
    if (!equalsLong(this.id_1, other.id_1))
      return false;
    if (!(this.name_1 === other.name_1))
      return false;
    if (!(this.company_1 === other.company_1))
      return false;
    if (!(this.phone_1 === other.phone_1))
      return false;
    if (!(this.email_1 === other.email_1))
      return false;
    if (!(this.status_1 === other.status_1))
      return false;
    if (!(this.responsibleUser_1 === other.responsibleUser_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('crm.api.DealDto', this, 7);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('title', false);
    tmp0_serialDesc.addElement_5pzumi_k$('company', false);
    tmp0_serialDesc.addElement_5pzumi_k$('amount', false);
    tmp0_serialDesc.addElement_5pzumi_k$('responsibleUser', false);
    tmp0_serialDesc.addElement_5pzumi_k$('stage', false);
    tmp0_serialDesc.addElement_5pzumi_k$('date', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).serialize_t5379k_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeLongElement_cega27_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.title_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 2, value.company_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 3, value.amount_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 4, value.responsibleUser_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 5, value.stage_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 6, value.date_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_t5379k_k$(encoder, value instanceof DealDto ? value : THROW_CCE());
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = new Long(0, 0);
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp11_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp11_input.decodeLongElement_994anb_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.decodeIntElement_941u6a_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.decodeLongElement_994anb_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.decodeIntElement_941u6a_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.endStructure_1xqz0n_k$(tmp0_desc);
    return DealDto_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function DealDto_init_$Init$(seen0, id, title, company, amount, responsibleUser, stage, date, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen0))) {
      throwMissingFieldException(seen0, 127, $serializer_getInstance_0().descriptor_1);
    }
    $this.id_1 = id;
    $this.title_1 = title;
    $this.company_1 = company;
    $this.amount_1 = amount;
    $this.responsibleUser_1 = responsibleUser;
    $this.stage_1 = stage;
    $this.date_1 = date;
    return $this;
  }
  function DealDto_init_$Create$(seen0, id, title, company, amount, responsibleUser, stage, date, serializationConstructorMarker) {
    return DealDto_init_$Init$(seen0, id, title, company, amount, responsibleUser, stage, date, serializationConstructorMarker, objectCreate(protoOf(DealDto)));
  }
  function DealDto(id, title, company, amount, responsibleUser, stage, date) {
    Companion_getInstance_0();
    this.id_1 = id;
    this.title_1 = title;
    this.company_1 = company;
    this.amount_1 = amount;
    this.responsibleUser_1 = responsibleUser;
    this.stage_1 = stage;
    this.date_1 = date;
  }
  protoOf(DealDto).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(DealDto).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(DealDto).get_company_gzg49g_k$ = function () {
    return this.company_1;
  };
  protoOf(DealDto).get_amount_b10di9_k$ = function () {
    return this.amount_1;
  };
  protoOf(DealDto).get_responsibleUser_5a5c7c_k$ = function () {
    return this.responsibleUser_1;
  };
  protoOf(DealDto).get_stage_iypwwl_k$ = function () {
    return this.stage_1;
  };
  protoOf(DealDto).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(DealDto).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(DealDto).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(DealDto).component3_7eebsa_k$ = function () {
    return this.company_1;
  };
  protoOf(DealDto).component4_7eebs9_k$ = function () {
    return this.amount_1;
  };
  protoOf(DealDto).component5_7eebs8_k$ = function () {
    return this.responsibleUser_1;
  };
  protoOf(DealDto).component6_7eebs7_k$ = function () {
    return this.stage_1;
  };
  protoOf(DealDto).component7_7eebs6_k$ = function () {
    return this.date_1;
  };
  protoOf(DealDto).copy_rkulbv_k$ = function (id, title, company, amount, responsibleUser, stage, date) {
    return new DealDto(id, title, company, amount, responsibleUser, stage, date);
  };
  protoOf(DealDto).copy$default_hrethx_k$ = function (id, title, company, amount, responsibleUser, stage, date, $super) {
    id = id === VOID ? this.id_1 : id;
    title = title === VOID ? this.title_1 : title;
    company = company === VOID ? this.company_1 : company;
    amount = amount === VOID ? this.amount_1 : amount;
    responsibleUser = responsibleUser === VOID ? this.responsibleUser_1 : responsibleUser;
    stage = stage === VOID ? this.stage_1 : stage;
    date = date === VOID ? this.date_1 : date;
    return $super === VOID ? this.copy_rkulbv_k$(id, title, company, amount, responsibleUser, stage, date) : $super.copy_rkulbv_k$.call(this, id, title, company, amount, responsibleUser, stage, date);
  };
  protoOf(DealDto).toString = function () {
    return 'DealDto(id=' + this.id_1.toString() + ', title=' + this.title_1 + ', company=' + this.company_1 + ', amount=' + this.amount_1 + ', responsibleUser=' + this.responsibleUser_1 + ', stage=' + this.stage_1 + ', date=' + this.date_1 + ')';
  };
  protoOf(DealDto).hashCode = function () {
    var result = this.id_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.company_1) | 0;
    result = imul(result, 31) + this.amount_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.responsibleUser_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.stage_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.date_1) | 0;
    return result;
  };
  protoOf(DealDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DealDto))
      return false;
    if (!equalsLong(this.id_1, other.id_1))
      return false;
    if (!(this.title_1 === other.title_1))
      return false;
    if (!(this.company_1 === other.company_1))
      return false;
    if (!(this.amount_1 === other.amount_1))
      return false;
    if (!(this.responsibleUser_1 === other.responsibleUser_1))
      return false;
    if (!(this.stage_1 === other.stage_1))
      return false;
    if (!(this.date_1 === other.date_1))
      return false;
    return true;
  };
  function MockData() {
    MockData_instance = this;
    this.clients_1 = listOf([new Client(1, '\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432', '\u041E\u041E\u041E \u0410\u043B\u044C\u0444\u0430', '+7 912 345-67-89', 'ivan@alfa.ru', '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439', '\u0411\u0443\u043B\u0430\u0442'), new Client(2, '\u0410\u043D\u043D\u0430 \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430', '\u0418\u041F \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430', '+7 987 654-32-10', 'anna@mail.ru', '\u041B\u0438\u0434', '\u0415\u0433\u043E\u0440'), new Client(3, '\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041A\u043E\u0437\u043B\u043E\u0432', 'TechSoft', '+7 900 111-22-33', 'dk@techsoft.ru', '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439', '\u042F\u0440\u0438\u043A')]);
    this.deals_1 = listOf([new Deal(1, '\u041E\u041E\u041E \u0420\u043E\u043C\u0430\u0448\u043A\u0430', 120000, '\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432', '\u041D\u043E\u0432\u044B\u0439 \u043B\u0438\u0434', '12.09.2026'), new Deal(2, '\u0418\u041F \u0421\u0438\u0434\u043E\u0440\u043E\u0432', 80000, '\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u0438\u0434\u043E\u0440\u043E\u0432', '\u041D\u043E\u0432\u044B\u0439 \u043B\u0438\u0434', '11.09.2026'), new Deal(3, '\u041E\u041E\u041E \u0422\u0435\u0445\u043D\u043E', 220000, '\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041A\u043E\u0437\u043B\u043E\u0432', '\u041D\u043E\u0432\u044B\u0439 \u043B\u0438\u0434', '10.09.2026'), new Deal(4, '\u0418\u041F \u041F\u0435\u0442\u0440\u043E\u0432', 150000, '\u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432', '\u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D', '10.09.2026'), new Deal(5, '\u041E\u041E\u041E \u0412\u0435\u043A\u0442\u043E\u0440', 130000, '\u0410\u043D\u043D\u0430 \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430', '\u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D', '09.09.2026'), new Deal(6, 'TechSoft', 240000, '\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041A\u043E\u0437\u043B\u043E\u0432', '\u041F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u044B', '12.09.2026'), new Deal(8, '\u041E\u041E\u041E \u0410\u043B\u044C\u0444\u0430', 120000, '\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432', '\u0414\u043E\u0433\u043E\u0432\u043E\u0440', '10.09.2026'), new Deal(9, '\u041E\u041E\u041E \u0413\u0430\u043C\u043C\u0430', 240000, '\u041C\u0430\u0440\u0438\u044F \u041A\u0443\u0437\u043D\u0435\u0446\u043E\u0432\u0430', '\u0423\u0441\u043F\u0435\u0445', '08.09.2026')]);
  }
  protoOf(MockData).get_clients_fhxbmn_k$ = function () {
    return this.clients_1;
  };
  protoOf(MockData).get_deals_iq7fby_k$ = function () {
    return this.deals_1;
  };
  var MockData_instance;
  function MockData_getInstance() {
    if (MockData_instance == null)
      new MockData();
    return MockData_instance;
  }
  function Client(id, name, company, phone, email, status, owner) {
    this.id_1 = id;
    this.name_1 = name;
    this.company_1 = company;
    this.phone_1 = phone;
    this.email_1 = email;
    this.status_1 = status;
    this.owner_1 = owner;
  }
  protoOf(Client).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Client).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Client).get_company_gzg49g_k$ = function () {
    return this.company_1;
  };
  protoOf(Client).get_phone_iwv5tx_k$ = function () {
    return this.phone_1;
  };
  protoOf(Client).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(Client).get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  protoOf(Client).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(Client).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(Client).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(Client).component3_7eebsa_k$ = function () {
    return this.company_1;
  };
  protoOf(Client).component4_7eebs9_k$ = function () {
    return this.phone_1;
  };
  protoOf(Client).component5_7eebs8_k$ = function () {
    return this.email_1;
  };
  protoOf(Client).component6_7eebs7_k$ = function () {
    return this.status_1;
  };
  protoOf(Client).component7_7eebs6_k$ = function () {
    return this.owner_1;
  };
  protoOf(Client).copy_jtq1x9_k$ = function (id, name, company, phone, email, status, owner) {
    return new Client(id, name, company, phone, email, status, owner);
  };
  protoOf(Client).copy$default_5qlchn_k$ = function (id, name, company, phone, email, status, owner, $super) {
    id = id === VOID ? this.id_1 : id;
    name = name === VOID ? this.name_1 : name;
    company = company === VOID ? this.company_1 : company;
    phone = phone === VOID ? this.phone_1 : phone;
    email = email === VOID ? this.email_1 : email;
    status = status === VOID ? this.status_1 : status;
    owner = owner === VOID ? this.owner_1 : owner;
    return $super === VOID ? this.copy_jtq1x9_k$(id, name, company, phone, email, status, owner) : $super.copy_jtq1x9_k$.call(this, id, name, company, phone, email, status, owner);
  };
  protoOf(Client).toString = function () {
    return 'Client(id=' + this.id_1 + ', name=' + this.name_1 + ', company=' + this.company_1 + ', phone=' + this.phone_1 + ', email=' + this.email_1 + ', status=' + this.status_1 + ', owner=' + this.owner_1 + ')';
  };
  protoOf(Client).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.company_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.phone_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.email_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.status_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.owner_1) | 0;
    return result;
  };
  protoOf(Client).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Client))
      return false;
    if (!(this.id_1 === other.id_1))
      return false;
    if (!(this.name_1 === other.name_1))
      return false;
    if (!(this.company_1 === other.company_1))
      return false;
    if (!(this.phone_1 === other.phone_1))
      return false;
    if (!(this.email_1 === other.email_1))
      return false;
    if (!(this.status_1 === other.status_1))
      return false;
    if (!(this.owner_1 === other.owner_1))
      return false;
    return true;
  };
  function Deal(id, company, amount, owner, stage, date) {
    this.id_1 = id;
    this.company_1 = company;
    this.amount_1 = amount;
    this.owner_1 = owner;
    this.stage_1 = stage;
    this.date_1 = date;
  }
  protoOf(Deal).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Deal).get_company_gzg49g_k$ = function () {
    return this.company_1;
  };
  protoOf(Deal).get_amount_b10di9_k$ = function () {
    return this.amount_1;
  };
  protoOf(Deal).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(Deal).get_stage_iypwwl_k$ = function () {
    return this.stage_1;
  };
  protoOf(Deal).get_date_wokkxj_k$ = function () {
    return this.date_1;
  };
  protoOf(Deal).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(Deal).component2_7eebsb_k$ = function () {
    return this.company_1;
  };
  protoOf(Deal).component3_7eebsa_k$ = function () {
    return this.amount_1;
  };
  protoOf(Deal).component4_7eebs9_k$ = function () {
    return this.owner_1;
  };
  protoOf(Deal).component5_7eebs8_k$ = function () {
    return this.stage_1;
  };
  protoOf(Deal).component6_7eebs7_k$ = function () {
    return this.date_1;
  };
  protoOf(Deal).copy_rh1u49_k$ = function (id, company, amount, owner, stage, date) {
    return new Deal(id, company, amount, owner, stage, date);
  };
  protoOf(Deal).copy$default_d5bwft_k$ = function (id, company, amount, owner, stage, date, $super) {
    id = id === VOID ? this.id_1 : id;
    company = company === VOID ? this.company_1 : company;
    amount = amount === VOID ? this.amount_1 : amount;
    owner = owner === VOID ? this.owner_1 : owner;
    stage = stage === VOID ? this.stage_1 : stage;
    date = date === VOID ? this.date_1 : date;
    return $super === VOID ? this.copy_rh1u49_k$(id, company, amount, owner, stage, date) : $super.copy_rh1u49_k$.call(this, id, company, amount, owner, stage, date);
  };
  protoOf(Deal).toString = function () {
    return 'Deal(id=' + this.id_1 + ', company=' + this.company_1 + ', amount=' + this.amount_1 + ', owner=' + this.owner_1 + ', stage=' + this.stage_1 + ', date=' + this.date_1 + ')';
  };
  protoOf(Deal).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.company_1) | 0;
    result = imul(result, 31) + this.amount_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.owner_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.stage_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.date_1) | 0;
    return result;
  };
  protoOf(Deal).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Deal))
      return false;
    if (!(this.id_1 === other.id_1))
      return false;
    if (!(this.company_1 === other.company_1))
      return false;
    if (!(this.amount_1 === other.amount_1))
      return false;
    if (!(this.owner_1 === other.owner_1))
      return false;
    if (!(this.stage_1 === other.stage_1))
      return false;
    if (!(this.date_1 === other.date_1))
      return false;
    return true;
  };
  function get_repository() {
    _init_properties_ClientsPage_kt__vo0j97();
    return repository;
  }
  var repository;
  function renderClients() {
    _init_properties_ClientsPage_kt__vo0j97();
    return div(VOID, renderClients$lambda);
  }
  function showAddClientModal(onSuccess) {
    _init_properties_ClientsPage_kt__vo0j97();
    var tmp0_elvis_lhs = document.getElementById('root');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var root = tmp;
    var tmp_0 = document.createElement('input');
    // Inline function 'kotlin.apply' call
    var this_0 = tmp_0 instanceof HTMLInputElement ? tmp_0 : THROW_CCE();
    this_0.className = 'form-control';
    this_0.placeholder = '\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432';
    var nameInput = this_0;
    var tmp_1 = document.createElement('input');
    // Inline function 'kotlin.apply' call
    var this_1 = tmp_1 instanceof HTMLInputElement ? tmp_1 : THROW_CCE();
    this_1.className = 'form-control';
    this_1.placeholder = '\u041E\u041E\u041E \u0410\u043B\u044C\u0444\u0430';
    var companyInput = this_1;
    var tmp_2 = document.createElement('input');
    // Inline function 'kotlin.apply' call
    var this_2 = tmp_2 instanceof HTMLInputElement ? tmp_2 : THROW_CCE();
    this_2.className = 'form-control';
    this_2.placeholder = '+7 999 000-00-00';
    var phoneInput = this_2;
    var tmp_3 = document.createElement('input');
    // Inline function 'kotlin.apply' call
    var this_3 = tmp_3 instanceof HTMLInputElement ? tmp_3 : THROW_CCE();
    this_3.className = 'form-control';
    this_3.placeholder = 'ivan@example.com';
    var emailInput = this_3;
    var tmp_4 = document.createElement('select');
    // Inline function 'kotlin.apply' call
    var this_4 = tmp_4 instanceof HTMLSelectElement ? tmp_4 : THROW_CCE();
    this_4.className = 'form-control';
    this_4.innerHTML = '<option value="\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439">\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439<\/option>\n<option value="\u041B\u0438\u0434">\u041B\u0438\u0434<\/option>\n<option value="\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439">\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439<\/option>';
    var statusSelect = this_4;
    var modalBackdrop = {_v: null};
    var modal = div('modal-backdrop', showAddClientModal$lambda(modalBackdrop, nameInput, companyInput, phoneInput, emailInput, statusSelect, root, onSuccess));
    root.appendChild(modal);
  }
  function renderClients$lambda($this$div) {
    _init_properties_ClientsPage_kt__vo0j97();
    var tableContainer = div();
    $this$div.appendChild(div('page-head', renderClients$lambda$lambda));
    $this$div.appendChild(tableContainer);
    tableContainer.textContent = '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432...';
    var tmp = MainScope();
    launch(tmp, VOID, VOID, renderClients$lambda$slambda_0(tableContainer, null));
    return Unit_getInstance();
  }
  function renderClients$lambda$lambda($this$div) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$div.appendChild(div(VOID, renderClients$lambda$lambda$lambda));
    $this$div.appendChild(button('+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430', 'primary', renderClients$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function renderClients$lambda$lambda$lambda($this$div) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$div.appendChild(tag('h1', VOID, renderClients$lambda$lambda$lambda$lambda));
    $this$div.appendChild(div('muted', renderClients$lambda$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function renderClients$lambda$lambda$lambda$lambda($this$tag) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$tag.textContent = '\u041A\u043B\u0438\u0435\u043D\u0442\u044B';
    return Unit_getInstance();
  }
  function renderClients$lambda$lambda$lambda$lambda_0($this$div) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$div.textContent = '\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439';
    return Unit_getInstance();
  }
  function renderClients$lambda$lambda$lambda_0() {
    _init_properties_ClientsPage_kt__vo0j97();
    showAddClientModal(renderClients$lambda$lambda$lambda$lambda_1);
    return Unit_getInstance();
  }
  function renderClients$lambda$lambda$lambda$lambda_1() {
    _init_properties_ClientsPage_kt__vo0j97();
    renderApp();
    return Unit_getInstance();
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda($this$tag) {
    $this$tag.appendChild(tag('tr', VOID, renderClients$lambda$slambda$lambda$lambda$lambda$lambda));
    return Unit_getInstance();
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda($this$tag) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = listOf(['\u0418\u043C\u044F', '\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F', '\u0422\u0435\u043B\u0435\u0444\u043E\u043D', 'Email', '\u0421\u0442\u0430\u0442\u0443\u0441', '\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439']).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      $this$tag.appendChild(tag('th', VOID, renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda(element)));
    }
    return Unit_getInstance();
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda($it) {
    return function ($this$tag) {
      $this$tag.textContent = $it;
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda$lambda() {
    set_currentPage(Page_PROFILE_getInstance());
    renderApp();
    return Unit_getInstance();
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_0($client) {
    return function ($this$tag) {
      var tmp = $client.get_name_woqyms_k$();
      $this$tag.appendChild(button(tmp, 'link-btn', renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda$lambda));
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_1($client) {
    return function ($this$tag) {
      $this$tag.textContent = $client.get_company_gzg49g_k$();
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_2($client) {
    return function ($this$tag) {
      $this$tag.textContent = $client.get_phone_iwv5tx_k$();
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_3($client) {
    return function ($this$tag) {
      $this$tag.textContent = $client.get_email_iqwbqr_k$();
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda$lambda_0($client) {
    return function ($this$tag) {
      $this$tag.textContent = $client.get_status_jnf6d7_k$();
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_4($client) {
    return function ($this$tag) {
      var badgeClass;
      switch ($client.get_status_jnf6d7_k$()) {
        case '\u041B\u0438\u0434':
          badgeClass = 'badge blue';
          break;
        case '\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439':
          badgeClass = 'badge orange';
          break;
        default:
          badgeClass = 'badge';
          break;
      }
      $this$tag.appendChild(tag('span', badgeClass, renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda$lambda_0($client)));
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_5($client) {
    return function ($this$tag) {
      $this$tag.textContent = $client.get_responsibleUser_5a5c7c_k$();
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda$lambda_0($client) {
    return function ($this$tag) {
      $this$tag.appendChild(tag('td', VOID, renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_0($client)));
      $this$tag.appendChild(tag('td', VOID, renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_1($client)));
      $this$tag.appendChild(tag('td', VOID, renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_2($client)));
      $this$tag.appendChild(tag('td', VOID, renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_3($client)));
      $this$tag.appendChild(tag('td', VOID, renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_4($client)));
      $this$tag.appendChild(tag('td', VOID, renderClients$lambda$slambda$lambda$lambda$lambda$lambda$lambda_5($client)));
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda$lambda_0($clients) {
    return function ($this$tag) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $clients.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        $this$tag.appendChild(tag('tr', VOID, renderClients$lambda$slambda$lambda$lambda$lambda$lambda_0(element)));
      }
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda$lambda($clients) {
    return function ($this$tag) {
      $this$tag.appendChild(tag('thead', VOID, renderClients$lambda$slambda$lambda$lambda$lambda));
      $this$tag.appendChild(tag('tbody', VOID, renderClients$lambda$slambda$lambda$lambda$lambda_0($clients)));
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda$lambda($clients) {
    return function ($this$div) {
      $this$div.appendChild(tag('table', VOID, renderClients$lambda$slambda$lambda$lambda($clients)));
      return Unit_getInstance();
    };
  }
  function renderClients$lambda$slambda($tableContainer, resultContinuation) {
    this.$tableContainer_1 = $tableContainer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderClients$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(renderClients$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderClients$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_repository().getClients_z0bdlp_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var clients = suspendResult;
            this.$tableContainer_1.innerHTML = '';
            this.$tableContainer_1.appendChild(div('table-wrap', renderClients$lambda$slambda$lambda(clients)));
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(renderClients$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new renderClients$lambda$slambda(this.$tableContainer_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(renderClients$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function renderClients$lambda$slambda_0($tableContainer, resultContinuation) {
    var i = new renderClients$lambda$slambda($tableContainer, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function showAddClientModal$lambda$lambda$lambda($this$tag) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$tag.textContent = '\u041D\u043E\u0432\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442';
    return Unit_getInstance();
  }
  function showAddClientModal$lambda$lambda$lambda$lambda($this$tag) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$tag.textContent = '\u0424\u0418\u041E *';
    return Unit_getInstance();
  }
  function showAddClientModal$lambda$lambda$lambda_0($nameInput) {
    return function ($this$div) {
      $this$div.appendChild(tag('label', VOID, showAddClientModal$lambda$lambda$lambda$lambda));
      $this$div.appendChild($nameInput);
      return Unit_getInstance();
    };
  }
  function showAddClientModal$lambda$lambda$lambda$lambda_0($this$tag) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$tag.textContent = '\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F';
    return Unit_getInstance();
  }
  function showAddClientModal$lambda$lambda$lambda_1($companyInput) {
    return function ($this$div) {
      $this$div.appendChild(tag('label', VOID, showAddClientModal$lambda$lambda$lambda$lambda_0));
      $this$div.appendChild($companyInput);
      return Unit_getInstance();
    };
  }
  function showAddClientModal$lambda$lambda$lambda$lambda_1($this$tag) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$tag.textContent = '\u0422\u0435\u043B\u0435\u0444\u043E\u043D';
    return Unit_getInstance();
  }
  function showAddClientModal$lambda$lambda$lambda_2($phoneInput) {
    return function ($this$div) {
      $this$div.appendChild(tag('label', VOID, showAddClientModal$lambda$lambda$lambda$lambda_1));
      $this$div.appendChild($phoneInput);
      return Unit_getInstance();
    };
  }
  function showAddClientModal$lambda$lambda$lambda$lambda_2($this$tag) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$tag.textContent = 'Email';
    return Unit_getInstance();
  }
  function showAddClientModal$lambda$lambda$lambda_3($emailInput) {
    return function ($this$div) {
      $this$div.appendChild(tag('label', VOID, showAddClientModal$lambda$lambda$lambda$lambda_2));
      $this$div.appendChild($emailInput);
      return Unit_getInstance();
    };
  }
  function showAddClientModal$lambda$lambda$lambda$lambda_3($this$tag) {
    _init_properties_ClientsPage_kt__vo0j97();
    $this$tag.textContent = '\u0421\u0442\u0430\u0442\u0443\u0441';
    return Unit_getInstance();
  }
  function showAddClientModal$lambda$lambda$lambda_4($statusSelect) {
    return function ($this$div) {
      $this$div.appendChild(tag('label', VOID, showAddClientModal$lambda$lambda$lambda$lambda_3));
      $this$div.appendChild($statusSelect);
      return Unit_getInstance();
    };
  }
  function showAddClientModal$lambda$lambda$lambda$lambda_4($root, $modalBackdrop) {
    return function () {
      var tmp;
      if ($modalBackdrop._v == null) {
        throwUninitializedPropertyAccessException('modalBackdrop');
      } else {
        tmp = $modalBackdrop._v;
      }
      $root.removeChild(tmp);
      return Unit_getInstance();
    };
  }
  function showAddClientModal$lambda$lambda$lambda$lambda$slambda($newClient, $root, $modalBackdrop, $onSuccess, resultContinuation) {
    this.$newClient_1 = $newClient;
    this.$root_1 = $root;
    this.$modalBackdrop_1 = $modalBackdrop;
    this.$onSuccess_1 = $onSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(showAddClientModal$lambda$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(showAddClientModal$lambda$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(showAddClientModal$lambda$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_repository().addClient_z959qt_k$(this.$newClient_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0;
            if (this.$modalBackdrop_1._v == null) {
              throwUninitializedPropertyAccessException('modalBackdrop');
            } else {
              tmp_0 = this.$modalBackdrop_1._v;
            }

            this.$root_1.removeChild(tmp_0);
            this.$onSuccess_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(showAddClientModal$lambda$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new showAddClientModal$lambda$lambda$lambda$lambda$slambda(this.$newClient_1, this.$root_1, this.$modalBackdrop_1, this.$onSuccess_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(showAddClientModal$lambda$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function showAddClientModal$lambda$lambda$lambda$lambda$slambda_0($newClient, $root, $modalBackdrop, $onSuccess, resultContinuation) {
    var i = new showAddClientModal$lambda$lambda$lambda$lambda$slambda($newClient, $root, $modalBackdrop, $onSuccess, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function showAddClientModal$lambda$lambda$lambda$lambda_5($nameInput, $companyInput, $phoneInput, $emailInput, $statusSelect, $root, $modalBackdrop, $onSuccess) {
    return function () {
      var tmp;
      if (isBlank($nameInput.value)) {
        window.alert('\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0424\u0418\u041E \u043A\u043B\u0438\u0435\u043D\u0442\u0430!');
        return Unit_getInstance();
      }
      var tmp_0 = new Long(0, 0);
      var tmp_1 = $nameInput.value;
      // Inline function 'kotlin.text.ifBlank' call
      var this_0 = $companyInput.value;
      var tmp_2;
      if (isBlank(this_0)) {
        tmp_2 = '-';
      } else {
        tmp_2 = this_0;
      }
      var tmp_3 = tmp_2;
      // Inline function 'kotlin.text.ifBlank' call
      var this_1 = $phoneInput.value;
      var tmp_4;
      if (isBlank(this_1)) {
        tmp_4 = '-';
      } else {
        tmp_4 = this_1;
      }
      var tmp_5 = tmp_4;
      // Inline function 'kotlin.text.ifBlank' call
      var this_2 = $emailInput.value;
      var tmp_6;
      if (isBlank(this_2)) {
        tmp_6 = '-';
      } else {
        tmp_6 = this_2;
      }
      var tmp$ret$4 = tmp_6;
      var newClient = new ClientDto(tmp_0, tmp_1, tmp_3, tmp_5, tmp$ret$4, $statusSelect.value, '\u0415\u0433\u043E\u0440');
      var tmp_7 = MainScope();
      launch(tmp_7, VOID, VOID, showAddClientModal$lambda$lambda$lambda$lambda$slambda_0(newClient, $root, $modalBackdrop, $onSuccess, null));
      return Unit_getInstance();
    };
  }
  function showAddClientModal$lambda$lambda$lambda_5($root, $modalBackdrop, $nameInput, $companyInput, $phoneInput, $emailInput, $statusSelect, $onSuccess) {
    return function ($this$div) {
      $this$div.appendChild(button('\u041E\u0442\u043C\u0435\u043D\u0430', 'secondary', showAddClientModal$lambda$lambda$lambda$lambda_4($root, $modalBackdrop)));
      $this$div.appendChild(button('\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C', 'primary', showAddClientModal$lambda$lambda$lambda$lambda_5($nameInput, $companyInput, $phoneInput, $emailInput, $statusSelect, $root, $modalBackdrop, $onSuccess)));
      return Unit_getInstance();
    };
  }
  function showAddClientModal$lambda$lambda($nameInput, $companyInput, $phoneInput, $emailInput, $statusSelect, $root, $modalBackdrop, $onSuccess) {
    return function ($this$div) {
      $this$div.appendChild(tag('h2', VOID, showAddClientModal$lambda$lambda$lambda));
      $this$div.appendChild(div('form-group', showAddClientModal$lambda$lambda$lambda_0($nameInput)));
      $this$div.appendChild(div('form-group', showAddClientModal$lambda$lambda$lambda_1($companyInput)));
      $this$div.appendChild(div('form-group', showAddClientModal$lambda$lambda$lambda_2($phoneInput)));
      $this$div.appendChild(div('form-group', showAddClientModal$lambda$lambda$lambda_3($emailInput)));
      $this$div.appendChild(div('form-group', showAddClientModal$lambda$lambda$lambda_4($statusSelect)));
      $this$div.appendChild(div('modal-actions', showAddClientModal$lambda$lambda$lambda_5($root, $modalBackdrop, $nameInput, $companyInput, $phoneInput, $emailInput, $statusSelect, $onSuccess)));
      return Unit_getInstance();
    };
  }
  function showAddClientModal$lambda($modalBackdrop, $nameInput, $companyInput, $phoneInput, $emailInput, $statusSelect, $root, $onSuccess) {
    return function ($this$div) {
      $modalBackdrop._v = $this$div;
      $this$div.appendChild(div('modal', showAddClientModal$lambda$lambda($nameInput, $companyInput, $phoneInput, $emailInput, $statusSelect, $root, $modalBackdrop, $onSuccess)));
      return Unit_getInstance();
    };
  }
  var properties_initialized_ClientsPage_kt_vzim7t;
  function _init_properties_ClientsPage_kt__vo0j97() {
    if (!properties_initialized_ClientsPage_kt_vzim7t) {
      properties_initialized_ClientsPage_kt_vzim7t = true;
      repository = MockCrmRepository_getInstance();
    }
  }
  function get_repository_0() {
    _init_properties_DashboardPage_kt__3t01wv();
    return repository_0;
  }
  var repository_0;
  function renderDashboard() {
    _init_properties_DashboardPage_kt__3t01wv();
    return div(VOID, renderDashboard$lambda);
  }
  function stat(label, value, note) {
    _init_properties_DashboardPage_kt__3t01wv();
    return div('stat', stat$lambda(label, value, note));
  }
  function activity(text, time) {
    _init_properties_DashboardPage_kt__3t01wv();
    return div('activity', activity$lambda(text, time));
  }
  function taskRow(text, deadline) {
    _init_properties_DashboardPage_kt__3t01wv();
    return div('task-row', taskRow$lambda(text, deadline));
  }
  function renderDashboard$lambda($this$div) {
    _init_properties_DashboardPage_kt__3t01wv();
    var statsContainer = div();
    $this$div.appendChild(div('page-head', renderDashboard$lambda$lambda));
    $this$div.appendChild(statsContainer);
    statsContainer.textContent = '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438...';
    var tmp = MainScope();
    launch(tmp, VOID, VOID, renderDashboard$lambda$slambda_0(statsContainer, null));
    return Unit_getInstance();
  }
  function renderDashboard$lambda$lambda($this$div) {
    _init_properties_DashboardPage_kt__3t01wv();
    $this$div.appendChild(div(VOID, renderDashboard$lambda$lambda$lambda));
    $this$div.appendChild(div('muted', renderDashboard$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function renderDashboard$lambda$lambda$lambda($this$div) {
    _init_properties_DashboardPage_kt__3t01wv();
    $this$div.appendChild(tag('h1', VOID, renderDashboard$lambda$lambda$lambda$lambda));
    $this$div.appendChild(div('muted', renderDashboard$lambda$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function renderDashboard$lambda$lambda$lambda$lambda($this$tag) {
    _init_properties_DashboardPage_kt__3t01wv();
    $this$tag.textContent = '\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, \u0415\u0433\u043E\u0440!';
    return Unit_getInstance();
  }
  function renderDashboard$lambda$lambda$lambda$lambda_0($this$div) {
    _init_properties_DashboardPage_kt__3t01wv();
    $this$div.textContent = '\u0412\u043E\u0442 \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432 \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0441\u0435\u0433\u043E\u0434\u043D\u044F.';
    return Unit_getInstance();
  }
  function renderDashboard$lambda$lambda$lambda_0($this$div) {
    _init_properties_DashboardPage_kt__3t01wv();
    $this$div.textContent = '11 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2026';
    return Unit_getInstance();
  }
  function renderDashboard$lambda$slambda$lambda($stats) {
    return function ($this$div) {
      $this$div.appendChild(stat('\u041A\u043B\u0438\u0435\u043D\u0442\u044B', $stats.get_clientsCount_4qxcy8_k$().toString(), '+12% \u0437\u0430 \u043C\u0435\u0441\u044F\u0446'));
      $this$div.appendChild(stat('\u0421\u0434\u0435\u043B\u043A\u0438', $stats.get_dealsCount_6tc029_k$().toString(), '+5% \u0437\u0430 \u043C\u0435\u0441\u044F\u0446'));
      $this$div.appendChild(stat('\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438', $stats.get_activeDealsCount_9f9dc9_k$().toString(), '3 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F'));
      $this$div.appendChild(stat('\u0417\u0430\u0434\u0430\u0447\u0438 \u0441\u0435\u0433\u043E\u0434\u043D\u044F', $stats.get_tasksTodayCount_lhh7x_k$().toString(), '2 \u0443\u0436\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B'));
      return Unit_getInstance();
    };
  }
  function renderDashboard$lambda$slambda$lambda_0($this$div) {
    $this$div.appendChild(div('panel', renderDashboard$lambda$slambda$lambda$lambda));
    $this$div.appendChild(div('panel', renderDashboard$lambda$slambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function renderDashboard$lambda$slambda$lambda$lambda($this$div) {
    $this$div.appendChild(tag('h3', VOID, renderDashboard$lambda$slambda$lambda$lambda$lambda));
    $this$div.appendChild(activity('\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432 \u0441\u043E\u0437\u0434\u0430\u043B \u043D\u043E\u0432\u0443\u044E \u0441\u0434\u0435\u043B\u043A\u0443', '10 \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434'));
    $this$div.appendChild(activity('\u0410\u043D\u043D\u0430 \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0430 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', '1 \u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434'));
    $this$div.appendChild(activity('\u0411\u0443\u043B\u0430\u0442 \u0438\u0437\u043C\u0435\u043D\u0438\u043B \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0434\u0435\u043B\u043A\u0438', '3 \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434'));
    $this$div.appendChild(activity('\u042F\u0440\u0438\u043A \u0441\u043E\u0437\u0434\u0430\u043B \u0437\u0430\u0434\u0430\u0447\u0443', '5 \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434'));
    return Unit_getInstance();
  }
  function renderDashboard$lambda$slambda$lambda$lambda$lambda($this$tag) {
    $this$tag.textContent = '\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438';
    return Unit_getInstance();
  }
  function renderDashboard$lambda$slambda$lambda$lambda_0($this$div) {
    $this$div.appendChild(tag('h3', VOID, renderDashboard$lambda$slambda$lambda$lambda$lambda_0));
    $this$div.appendChild(taskRow('\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u041E\u041E\u041E \u0410\u043B\u044C\u0444\u0430', '\u0421\u0435\u0433\u043E\u0434\u043D\u044F, 14:00'));
    $this$div.appendChild(taskRow('\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u0433\u043E\u0432\u043E\u0440', '\u0421\u0435\u0433\u043E\u0434\u043D\u044F, 17:00'));
    $this$div.appendChild(taskRow('\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044E', '\u0417\u0430\u0432\u0442\u0440\u0430, 10:00'));
    $this$div.appendChild(taskRow('\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B', '13.09.2026'));
    return Unit_getInstance();
  }
  function renderDashboard$lambda$slambda$lambda$lambda$lambda_0($this$tag) {
    $this$tag.textContent = '\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438';
    return Unit_getInstance();
  }
  function renderDashboard$lambda$slambda($statsContainer, resultContinuation) {
    this.$statsContainer_1 = $statsContainer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderDashboard$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(renderDashboard$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderDashboard$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_repository_0().getDashboardStats_hlyro2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var stats = suspendResult;
            this.$statsContainer_1.innerHTML = '';
            this.$statsContainer_1.appendChild(div('grid-4', renderDashboard$lambda$slambda$lambda(stats)));
            this.$statsContainer_1.appendChild(div('two-col', renderDashboard$lambda$slambda$lambda_0));
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(renderDashboard$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new renderDashboard$lambda$slambda(this.$statsContainer_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(renderDashboard$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function renderDashboard$lambda$slambda_0($statsContainer, resultContinuation) {
    var i = new renderDashboard$lambda$slambda($statsContainer, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function stat$lambda$lambda($label) {
    return function ($this$div) {
      $this$div.textContent = $label;
      return Unit_getInstance();
    };
  }
  function stat$lambda$lambda_0($value) {
    return function ($this$div) {
      $this$div.textContent = $value;
      return Unit_getInstance();
    };
  }
  function stat$lambda$lambda_1($note) {
    return function ($this$div) {
      $this$div.textContent = $note;
      return Unit_getInstance();
    };
  }
  function stat$lambda($label, $value, $note) {
    return function ($this$div) {
      $this$div.appendChild(div('stat-label', stat$lambda$lambda($label)));
      $this$div.appendChild(div('stat-value', stat$lambda$lambda_0($value)));
      $this$div.appendChild(div('good', stat$lambda$lambda_1($note)));
      return Unit_getInstance();
    };
  }
  function activity$lambda$lambda($text) {
    return function ($this$tag) {
      $this$tag.textContent = $text;
      return Unit_getInstance();
    };
  }
  function activity$lambda$lambda_0($time) {
    return function ($this$tag) {
      $this$tag.textContent = $time;
      return Unit_getInstance();
    };
  }
  function activity$lambda($text, $time) {
    return function ($this$div) {
      $this$div.appendChild(tag('span', VOID, activity$lambda$lambda($text)));
      $this$div.appendChild(tag('span', 'muted', activity$lambda$lambda_0($time)));
      return Unit_getInstance();
    };
  }
  function taskRow$lambda$lambda($text) {
    return function ($this$tag) {
      $this$tag.textContent = '\u2610 ' + $text;
      return Unit_getInstance();
    };
  }
  function taskRow$lambda$lambda_0($deadline) {
    return function ($this$tag) {
      $this$tag.textContent = $deadline;
      return Unit_getInstance();
    };
  }
  function taskRow$lambda($text, $deadline) {
    return function ($this$div) {
      $this$div.appendChild(tag('span', VOID, taskRow$lambda$lambda($text)));
      $this$div.appendChild(tag('span', 'muted', taskRow$lambda$lambda_0($deadline)));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DashboardPage_kt_6igv59;
  function _init_properties_DashboardPage_kt__3t01wv() {
    if (!properties_initialized_DashboardPage_kt_6igv59) {
      properties_initialized_DashboardPage_kt_6igv59 = true;
      repository_0 = MockCrmRepository_getInstance();
    }
  }
  function get_repository_1() {
    _init_properties_DealsPage_kt__12ussc();
    return repository_1;
  }
  var repository_1;
  function get_stages() {
    _init_properties_DealsPage_kt__12ussc();
    return stages;
  }
  var stages;
  function renderDeals() {
    _init_properties_DealsPage_kt__12ussc();
    return div(VOID, renderDeals$lambda);
  }
  function showAddDealModal(initialStage, onSuccess) {
    _init_properties_DealsPage_kt__12ussc();
    var tmp0_elvis_lhs = document.getElementById('root');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var root = tmp;
    var tmp_0 = document.createElement('input');
    // Inline function 'kotlin.apply' call
    var this_0 = tmp_0 instanceof HTMLInputElement ? tmp_0 : THROW_CCE();
    this_0.className = 'form-control';
    this_0.placeholder = '\u041E\u041E\u041E \u0420\u043E\u043C\u0430\u0448\u043A\u0430';
    var companyInput = this_0;
    var tmp_1 = document.createElement('input');
    // Inline function 'kotlin.apply' call
    var this_1 = tmp_1 instanceof HTMLInputElement ? tmp_1 : THROW_CCE();
    this_1.className = 'form-control';
    this_1.placeholder = '100000';
    this_1.type = 'number';
    var amountInput = this_1;
    var tmp_2 = document.createElement('input');
    // Inline function 'kotlin.apply' call
    var this_2 = tmp_2 instanceof HTMLInputElement ? tmp_2 : THROW_CCE();
    this_2.className = 'form-control';
    this_2.placeholder = '\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432';
    var ownerInput = this_2;
    var tmp_3 = document.createElement('select');
    // Inline function 'kotlin.apply' call
    var this_3 = tmp_3 instanceof HTMLSelectElement ? tmp_3 : THROW_CCE();
    this_3.className = 'form-control';
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_stages().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var opt = document.createElement('option');
      opt.textContent = element;
      opt.setAttribute('value', element);
      if (element === initialStage) {
        opt.setAttribute('selected', 'true');
      }
      this_3.appendChild(opt);
    }
    var stageSelect = this_3;
    var modalBackdrop = {_v: null};
    var modal = div('modal-backdrop', showAddDealModal$lambda(modalBackdrop, companyInput, amountInput, ownerInput, stageSelect, root, onSuccess));
    root.appendChild(modal);
  }
  function renderDeals$lambda($this$div) {
    _init_properties_DealsPage_kt__12ussc();
    var kanbanContainer = div();
    $this$div.appendChild(div('page-head', renderDeals$lambda$lambda));
    $this$div.appendChild(kanbanContainer);
    kanbanContainer.textContent = '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0434\u0435\u043B\u043E\u043A...';
    var tmp = MainScope();
    launch(tmp, VOID, VOID, renderDeals$lambda$slambda_0(kanbanContainer, null));
    return Unit_getInstance();
  }
  function renderDeals$lambda$lambda($this$div) {
    _init_properties_DealsPage_kt__12ussc();
    $this$div.appendChild(div(VOID, renderDeals$lambda$lambda$lambda));
    $this$div.appendChild(button('+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0434\u0435\u043B\u043A\u0443', 'primary', renderDeals$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function renderDeals$lambda$lambda$lambda($this$div) {
    _init_properties_DealsPage_kt__12ussc();
    $this$div.appendChild(tag('h1', VOID, renderDeals$lambda$lambda$lambda$lambda));
    $this$div.appendChild(div('muted', renderDeals$lambda$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function renderDeals$lambda$lambda$lambda$lambda($this$tag) {
    _init_properties_DealsPage_kt__12ussc();
    $this$tag.textContent = '\u0421\u0434\u0435\u043B\u043A\u0438';
    return Unit_getInstance();
  }
  function renderDeals$lambda$lambda$lambda$lambda_0($this$div) {
    _init_properties_DealsPage_kt__12ussc();
    $this$div.textContent = '\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C\u0438 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \u0432\u043E\u0440\u043E\u043D\u043A\u0438';
    return Unit_getInstance();
  }
  function renderDeals$lambda$lambda$lambda_0() {
    _init_properties_DealsPage_kt__12ussc();
    showAddDealModal(null, renderDeals$lambda$lambda$lambda$lambda_1);
    return Unit_getInstance();
  }
  function renderDeals$lambda$lambda$lambda$lambda_1() {
    _init_properties_DealsPage_kt__12ussc();
    renderApp();
    return Unit_getInstance();
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda($stage) {
    return function ($this$div) {
      $this$div.textContent = $stage;
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda_0($stageDeals, $totalAmount) {
    return function ($this$div) {
      $this$div.textContent = '' + $stageDeals.get_size_woubt6_k$() + ' \u0441\u0434\u0435\u043B\u043E\u043A \xB7 ' + money($totalAmount);
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda$lambda($deal) {
    return function ($this$tag) {
      $this$tag.textContent = $deal.get_company_gzg49g_k$();
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda$lambda_0($deal) {
    return function ($this$div) {
      $this$div.textContent = money($deal.get_amount_b10di9_k$());
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda$lambda$lambda($deal) {
    return function ($this$tag) {
      $this$tag.textContent = '\uD83D\uDC64 ' + $deal.get_responsibleUser_5a5c7c_k$();
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda$lambda$lambda_0($deal) {
    return function ($this$tag) {
      $this$tag.textContent = '\uD83D\uDCC5 ' + $deal.get_date_wokkxj_k$();
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda$lambda_1($deal) {
    return function ($this$div) {
      $this$div.appendChild(tag('span', VOID, renderDeals$lambda$slambda$lambda$lambda$lambda$lambda$lambda($deal)));
      $this$div.appendChild(tag('br'));
      $this$div.appendChild(tag('span', VOID, renderDeals$lambda$slambda$lambda$lambda$lambda$lambda$lambda_0($deal)));
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda_1($deal) {
    return function ($this$div) {
      $this$div.appendChild(tag('strong', VOID, renderDeals$lambda$slambda$lambda$lambda$lambda$lambda($deal)));
      $this$div.appendChild(div(VOID, renderDeals$lambda$slambda$lambda$lambda$lambda$lambda_0($deal)));
      $this$div.appendChild(div('deal-meta', renderDeals$lambda$slambda$lambda$lambda$lambda$lambda_1($deal)));
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda$lambda_2() {
    renderApp();
    return Unit_getInstance();
  }
  function renderDeals$lambda$slambda$lambda$lambda$lambda_2($stage) {
    return function () {
      showAddDealModal($stage, renderDeals$lambda$slambda$lambda$lambda$lambda$lambda_2);
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda$lambda($stageDeals, $stage, $totalAmount) {
    return function ($this$div) {
      $this$div.appendChild(div('col-title', renderDeals$lambda$slambda$lambda$lambda$lambda($stage)));
      $this$div.appendChild(div('col-meta', renderDeals$lambda$slambda$lambda$lambda$lambda_0($stageDeals, $totalAmount)));
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $stageDeals.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        $this$div.appendChild(div('deal-card', renderDeals$lambda$slambda$lambda$lambda$lambda_1(element)));
      }
      // Inline function 'kotlin.apply' call
      var this_0 = button('+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0434\u0435\u043B\u043A\u0443', 'secondary', renderDeals$lambda$slambda$lambda$lambda$lambda_2($stage));
      this_0.setAttribute('style', 'width:100%');
      $this$div.appendChild(this_0);
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda$lambda($deals) {
    return function ($this$div) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_stages().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.filter' call
        var tmp0 = $deals;
        // Inline function 'kotlin.collections.filterTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s_0 = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          if (element_0.get_stage_iypwwl_k$() === element) {
            destination.add_utx5q5_k$(element_0);
          }
        }
        var stageDeals = destination;
        // Inline function 'kotlin.collections.sumOf' call
        var sum = 0;
        var _iterator__ex2g4s_1 = stageDeals.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
          var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
          var tmp = sum;
          sum = tmp + element_1.get_amount_b10di9_k$() | 0;
        }
        var totalAmount = sum;
        $this$div.appendChild(div('kanban-col', renderDeals$lambda$slambda$lambda$lambda(stageDeals, element, totalAmount)));
      }
      return Unit_getInstance();
    };
  }
  function renderDeals$lambda$slambda($kanbanContainer, resultContinuation) {
    this.$kanbanContainer_1 = $kanbanContainer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderDeals$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(renderDeals$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderDeals$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_repository_1().getDeals_gg3wj_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var deals = suspendResult;
            this.$kanbanContainer_1.innerHTML = '';
            this.$kanbanContainer_1.appendChild(div('kanban', renderDeals$lambda$slambda$lambda(deals)));
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(renderDeals$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new renderDeals$lambda$slambda(this.$kanbanContainer_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(renderDeals$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function renderDeals$lambda$slambda_0($kanbanContainer, resultContinuation) {
    var i = new renderDeals$lambda$slambda($kanbanContainer, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function showAddDealModal$lambda$lambda$lambda($this$tag) {
    _init_properties_DealsPage_kt__12ussc();
    $this$tag.textContent = '\u041D\u043E\u0432\u0430\u044F \u0441\u0434\u0435\u043B\u043A\u0430';
    return Unit_getInstance();
  }
  function showAddDealModal$lambda$lambda$lambda$lambda($this$tag) {
    _init_properties_DealsPage_kt__12ussc();
    $this$tag.textContent = '\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F / \u041A\u043B\u0438\u0435\u043D\u0442 *';
    return Unit_getInstance();
  }
  function showAddDealModal$lambda$lambda$lambda_0($companyInput) {
    return function ($this$div) {
      $this$div.appendChild(tag('label', VOID, showAddDealModal$lambda$lambda$lambda$lambda));
      $this$div.appendChild($companyInput);
      return Unit_getInstance();
    };
  }
  function showAddDealModal$lambda$lambda$lambda$lambda_0($this$tag) {
    _init_properties_DealsPage_kt__12ussc();
    $this$tag.textContent = '\u0421\u0443\u043C\u043C\u0430 (\u20BD) *';
    return Unit_getInstance();
  }
  function showAddDealModal$lambda$lambda$lambda_1($amountInput) {
    return function ($this$div) {
      $this$div.appendChild(tag('label', VOID, showAddDealModal$lambda$lambda$lambda$lambda_0));
      $this$div.appendChild($amountInput);
      return Unit_getInstance();
    };
  }
  function showAddDealModal$lambda$lambda$lambda$lambda_1($this$tag) {
    _init_properties_DealsPage_kt__12ussc();
    $this$tag.textContent = '\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 *';
    return Unit_getInstance();
  }
  function showAddDealModal$lambda$lambda$lambda_2($ownerInput) {
    return function ($this$div) {
      $this$div.appendChild(tag('label', VOID, showAddDealModal$lambda$lambda$lambda$lambda_1));
      $this$div.appendChild($ownerInput);
      return Unit_getInstance();
    };
  }
  function showAddDealModal$lambda$lambda$lambda$lambda_2($this$tag) {
    _init_properties_DealsPage_kt__12ussc();
    $this$tag.textContent = '\u0421\u0442\u0430\u0434\u0438\u044F \u0432\u043E\u0440\u043E\u043D\u043A\u0438';
    return Unit_getInstance();
  }
  function showAddDealModal$lambda$lambda$lambda_3($stageSelect) {
    return function ($this$div) {
      $this$div.appendChild(tag('label', VOID, showAddDealModal$lambda$lambda$lambda$lambda_2));
      $this$div.appendChild($stageSelect);
      return Unit_getInstance();
    };
  }
  function showAddDealModal$lambda$lambda$lambda$lambda_3($root, $modalBackdrop) {
    return function () {
      var tmp;
      if ($modalBackdrop._v == null) {
        throwUninitializedPropertyAccessException('modalBackdrop');
      } else {
        tmp = $modalBackdrop._v;
      }
      $root.removeChild(tmp);
      return Unit_getInstance();
    };
  }
  function showAddDealModal$lambda$lambda$lambda$lambda$slambda($newDeal, $root, $modalBackdrop, $onSuccess, resultContinuation) {
    this.$newDeal_1 = $newDeal;
    this.$root_1 = $root;
    this.$modalBackdrop_1 = $modalBackdrop;
    this.$onSuccess_1 = $onSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(showAddDealModal$lambda$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(showAddDealModal$lambda$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(showAddDealModal$lambda$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = get_repository_1().addDeal_8ro96e_k$(this.$newDeal_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0;
            if (this.$modalBackdrop_1._v == null) {
              throwUninitializedPropertyAccessException('modalBackdrop');
            } else {
              tmp_0 = this.$modalBackdrop_1._v;
            }

            this.$root_1.removeChild(tmp_0);
            this.$onSuccess_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(showAddDealModal$lambda$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new showAddDealModal$lambda$lambda$lambda$lambda$slambda(this.$newDeal_1, this.$root_1, this.$modalBackdrop_1, this.$onSuccess_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(showAddDealModal$lambda$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function showAddDealModal$lambda$lambda$lambda$lambda$slambda_0($newDeal, $root, $modalBackdrop, $onSuccess, resultContinuation) {
    var i = new showAddDealModal$lambda$lambda$lambda$lambda$slambda($newDeal, $root, $modalBackdrop, $onSuccess, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function showAddDealModal$lambda$lambda$lambda$lambda_4($companyInput, $amountInput, $ownerInput, $stageSelect, $root, $modalBackdrop, $onSuccess) {
    return function () {
      var tmp;
      if (isBlank($companyInput.value) || isBlank($amountInput.value)) {
        window.alert('\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u0438 \u0441\u0443\u043C\u043C\u0443!');
        return Unit_getInstance();
      }
      var tmp_0 = new Long(0, 0);
      var tmp_1 = '\u0421\u0434\u0435\u043B\u043A\u0430 ' + $companyInput.value;
      var tmp_2 = $companyInput.value;
      var tmp0_elvis_lhs = toIntOrNull($amountInput.value);
      var tmp_3 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
      // Inline function 'kotlin.text.ifBlank' call
      var this_0 = $ownerInput.value;
      var tmp_4;
      if (isBlank(this_0)) {
        tmp_4 = '\u0415\u0433\u043E\u0440';
      } else {
        tmp_4 = this_0;
      }
      var tmp$ret$0 = tmp_4;
      var newDeal = new DealDto(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$0, $stageSelect.value, '16.09.2026');
      var tmp_5 = MainScope();
      launch(tmp_5, VOID, VOID, showAddDealModal$lambda$lambda$lambda$lambda$slambda_0(newDeal, $root, $modalBackdrop, $onSuccess, null));
      return Unit_getInstance();
    };
  }
  function showAddDealModal$lambda$lambda$lambda_4($root, $modalBackdrop, $companyInput, $amountInput, $ownerInput, $stageSelect, $onSuccess) {
    return function ($this$div) {
      $this$div.appendChild(button('\u041E\u0442\u043C\u0435\u043D\u0430', 'secondary', showAddDealModal$lambda$lambda$lambda$lambda_3($root, $modalBackdrop)));
      $this$div.appendChild(button('\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C', 'primary', showAddDealModal$lambda$lambda$lambda$lambda_4($companyInput, $amountInput, $ownerInput, $stageSelect, $root, $modalBackdrop, $onSuccess)));
      return Unit_getInstance();
    };
  }
  function showAddDealModal$lambda$lambda($companyInput, $amountInput, $ownerInput, $stageSelect, $root, $modalBackdrop, $onSuccess) {
    return function ($this$div) {
      $this$div.appendChild(tag('h2', VOID, showAddDealModal$lambda$lambda$lambda));
      $this$div.appendChild(div('form-group', showAddDealModal$lambda$lambda$lambda_0($companyInput)));
      $this$div.appendChild(div('form-group', showAddDealModal$lambda$lambda$lambda_1($amountInput)));
      $this$div.appendChild(div('form-group', showAddDealModal$lambda$lambda$lambda_2($ownerInput)));
      $this$div.appendChild(div('form-group', showAddDealModal$lambda$lambda$lambda_3($stageSelect)));
      $this$div.appendChild(div('modal-actions', showAddDealModal$lambda$lambda$lambda_4($root, $modalBackdrop, $companyInput, $amountInput, $ownerInput, $stageSelect, $onSuccess)));
      return Unit_getInstance();
    };
  }
  function showAddDealModal$lambda($modalBackdrop, $companyInput, $amountInput, $ownerInput, $stageSelect, $root, $onSuccess) {
    return function ($this$div) {
      $modalBackdrop._v = $this$div;
      $this$div.appendChild(div('modal', showAddDealModal$lambda$lambda($companyInput, $amountInput, $ownerInput, $stageSelect, $root, $modalBackdrop, $onSuccess)));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DealsPage_kt_e4aqqi;
  function _init_properties_DealsPage_kt__12ussc() {
    if (!properties_initialized_DealsPage_kt_e4aqqi) {
      properties_initialized_DealsPage_kt_e4aqqi = true;
      repository_1 = MockCrmRepository_getInstance();
      stages = listOf(['\u041D\u043E\u0432\u044B\u0439 \u043B\u0438\u0434', '\u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D', '\u041F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u044B', '\u0414\u043E\u0433\u043E\u0432\u043E\u0440', '\u0423\u0441\u043F\u0435\u0445']);
    }
  }
  function renderProfile() {
    return div(VOID, renderProfile$lambda);
  }
  function field(label, value) {
    return div('field', field$lambda(label, value));
  }
  function renderProfile$lambda($this$div) {
    $this$div.appendChild(div('page-head', renderProfile$lambda$lambda));
    $this$div.appendChild(div('profile-head', renderProfile$lambda$lambda_0));
    $this$div.appendChild(div('profile-grid', renderProfile$lambda$lambda_1));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda($this$div) {
    $this$div.appendChild(button('\u2190 \u041A\u043B\u0438\u0435\u043D\u0442\u044B', 'secondary', renderProfile$lambda$lambda$lambda));
    $this$div.appendChild(button('+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0434\u0435\u043B\u043A\u0443', 'primary', renderProfile$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda() {
    set_currentPage(Page_CLIENTS_getInstance());
    renderApp();
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda_0() {
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda_0($this$div) {
    $this$div.appendChild(div('avatar', renderProfile$lambda$lambda$lambda_1));
    $this$div.appendChild(div(VOID, renderProfile$lambda$lambda$lambda_2));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda_1($this$div) {
    $this$div.textContent = '\u0418\u041F';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda_2($this$div) {
    $this$div.appendChild(tag('h1', VOID, renderProfile$lambda$lambda$lambda$lambda));
    $this$div.appendChild(div('muted', renderProfile$lambda$lambda$lambda$lambda_0));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda($this$tag) {
    $this$tag.textContent = '\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda_0($this$div) {
    $this$div.textContent = '\u041E\u041E\u041E \u0410\u043B\u044C\u0444\u0430 \xB7 ';
    $this$div.appendChild(tag('span', 'badge', renderProfile$lambda$lambda$lambda$lambda$lambda));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda($this$tag) {
    $this$tag.textContent = '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda_1($this$div) {
    $this$div.appendChild(div('profile-card', renderProfile$lambda$lambda$lambda_3));
    $this$div.appendChild(div(VOID, renderProfile$lambda$lambda$lambda_4));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda_3($this$div) {
    $this$div.appendChild(tag('h3', VOID, renderProfile$lambda$lambda$lambda$lambda_1));
    $this$div.appendChild(field('\u0418\u043C\u044F', '\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432'));
    $this$div.appendChild(field('\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F', '\u041E\u041E\u041E \u0410\u043B\u044C\u0444\u0430'));
    $this$div.appendChild(field('\u0422\u0435\u043B\u0435\u0444\u043E\u043D', '+7 912 345-67-89'));
    $this$div.appendChild(field('Email', 'ivan@alfa.ru'));
    $this$div.appendChild(field('\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C', '\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440'));
    $this$div.appendChild(field('\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439', '\u0411\u0443\u043B\u0430\u0442'));
    $this$div.appendChild(field('\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A', '\u0421\u0430\u0439\u0442'));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda_1($this$tag) {
    $this$tag.textContent = '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda_4($this$div) {
    $this$div.appendChild(div('profile-card', renderProfile$lambda$lambda$lambda$lambda_2));
    $this$div.appendChild(div('profile-card', renderProfile$lambda$lambda$lambda$lambda_3));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda_2($this$div) {
    $this$div.setAttribute('style', 'margin-bottom: 24px;');
    $this$div.appendChild(tag('h3', VOID, renderProfile$lambda$lambda$lambda$lambda$lambda_0));
    $this$div.appendChild(tag('p', VOID, renderProfile$lambda$lambda$lambda$lambda$lambda_1));
    $this$div.appendChild(div('tags', renderProfile$lambda$lambda$lambda$lambda$lambda_2));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda_0($this$tag) {
    $this$tag.textContent = '\u0417\u0430\u043C\u0435\u0442\u043A\u0438';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda_1($this$tag) {
    $this$tag.textContent = '\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043A\u0440\u0443\u043F\u043D\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442. \u0418\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442\u0441\u044F \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435\u043C CRM \u0434\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u0430 \u043F\u0440\u043E\u0434\u0430\u0436.';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda_2($this$div) {
    $this$div.appendChild(tag('span', 'tag blue', renderProfile$lambda$lambda$lambda$lambda$lambda$lambda));
    $this$div.appendChild(tag('span', 'tag blue', renderProfile$lambda$lambda$lambda$lambda$lambda$lambda_0));
    $this$div.appendChild(tag('span', 'tag blue', renderProfile$lambda$lambda$lambda$lambda$lambda$lambda_1));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda$lambda($this$tag) {
    $this$tag.textContent = 'B2B';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda$lambda_0($this$tag) {
    $this$tag.textContent = 'CRM';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda$lambda_1($this$tag) {
    $this$tag.textContent = '\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0439';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda_3($this$div) {
    $this$div.appendChild(tag('h3', VOID, renderProfile$lambda$lambda$lambda$lambda$lambda_3));
    $this$div.appendChild(tag('p', VOID, renderProfile$lambda$lambda$lambda$lambda$lambda_4));
    $this$div.appendChild(div('muted', renderProfile$lambda$lambda$lambda$lambda$lambda_5));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda_3($this$tag) {
    $this$tag.textContent = '\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda_4($this$tag) {
    $this$tag.appendChild(tag('strong', VOID, renderProfile$lambda$lambda$lambda$lambda$lambda$lambda_2));
    $this$tag.appendChild(tag('span', VOID, renderProfile$lambda$lambda$lambda$lambda$lambda$lambda_3));
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda$lambda_2($this$tag) {
    $this$tag.textContent = '\u0415\u0433\u043E\u0440: ';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda$lambda_3($this$tag) {
    $this$tag.textContent = '\u0421\u043E\u0437\u0432\u043E\u043D\u0438\u043B\u0438\u0441\u044C, \u0436\u0434\u0451\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430.';
    return Unit_getInstance();
  }
  function renderProfile$lambda$lambda$lambda$lambda$lambda_5($this$div) {
    $this$div.setAttribute('style', 'font-size: 12px; margin-top: 16px;');
    $this$div.textContent = '\u0417\u0434\u0435\u0441\u044C \u043F\u043E\u0437\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0444\u043E\u0440\u043C\u0430 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439.';
    return Unit_getInstance();
  }
  function field$lambda$lambda($label) {
    return function ($this$tag) {
      $this$tag.textContent = $label;
      return Unit_getInstance();
    };
  }
  function field$lambda$lambda_0($value) {
    return function ($this$tag) {
      $this$tag.textContent = $value;
      return Unit_getInstance();
    };
  }
  function field$lambda($label, $value) {
    return function ($this$div) {
      $this$div.appendChild(tag('span', 'muted', field$lambda$lambda($label)));
      $this$div.appendChild(tag('strong', VOID, field$lambda$lambda_0($value)));
      return Unit_getInstance();
    };
  }
  function div(cssClass, block) {
    cssClass = cssClass === VOID ? '' : cssClass;
    var tmp;
    if (block === VOID) {
      tmp = div$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    return tag('div', cssClass, block);
  }
  function tag(name, cssClass, block) {
    cssClass = cssClass === VOID ? '' : cssClass;
    var tmp;
    if (block === VOID) {
      tmp = tag$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = document.createElement(name);
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(cssClass) > 0) {
      this_0.className = cssClass;
    }
    block(this_0);
    return this_0;
  }
  function button(text, cssClass, onClick) {
    cssClass = cssClass === VOID ? '' : cssClass;
    var tmp = document.createElement('button');
    // Inline function 'kotlin.apply' call
    var this_0 = tmp instanceof HTMLButtonElement ? tmp : THROW_CCE();
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(cssClass) > 0) {
      this_0.className = cssClass;
    }
    this_0.textContent = text;
    this_0.onclick = button$lambda(onClick);
    return this_0;
  }
  function money(value) {
    // Inline function 'kotlin.text.reversed' call
    var this_0 = value.toString();
    var tmp$ret$0 = toString(reversed(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    // Inline function 'kotlin.text.reversed' call
    var this_1 = joinToString(chunked(tmp$ret$0, 3), ' ');
    return toString(reversed(isCharSequence(this_1) ? this_1 : THROW_CCE())) + ' \u20BD';
  }
  function div$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function tag$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function button$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  mainWrapper();
  return _;
}));
