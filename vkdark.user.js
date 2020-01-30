// ==UserScript==
// @name         VK Dark
// @namespace    http://tampermonkey.net/
// @version      0.0.5
// @description  Изменяет внешний вид Вконтакте на темный
// @author       Dmitriy1921
// @include      http://vk.com/*
// @include      https://vk.com/*
// @grant        none
// ==/UserScript==
(function() {
   var css = `*::-webkit-scrollbar {
  width: 5px;
  max-height: 5px;
  background-color: #242424 !important;
}
*::-webkit-scrollbar-thumb {
  background-color: #878787;
  border-radius: 50px;
}
*::-webkit-scrollbar-track-piece {
  background: none;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
body {
  background: #1a1a1a;
  background: -moz-linear-gradient(left, #1a1a1a 0%, #242424 51%, #1a1a1a 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, #1a1a1a), color-stop(51%, #242424), color-stop(100%, #1a1a1a));
  background: -webkit-linear-gradient(left, #1a1a1a 0%, #242424 51%, #1a1a1a 100%);
  background: -o-linear-gradient(left, #1a1a1a 0%, #242424 51%, #1a1a1a 100%);
  background: -ms-linear-gradient(left, #1a1a1a 0%, #242424 51%, #1a1a1a 100%);
  background: linear-gradient(to right, #1a1a1a 0%, #242424 51%, #1a1a1a 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1a1a1a', endColorstr='#1a1a1a', GradientType=1);
  color: #ffffff !important;
}
body .page_block,
body .mv_info {
  color: #ffffff !important;
  background: #3b3f41 !important;
  box-shadow: none;
}
body .page_block.ui_rmenu,
body .mv_info.ui_rmenu {
  background: #242424 !important;
}
body .article_ed_layer,
body .article_layer,
body .article,
body .photos_container_edit_grid .photos_photo_edit_row,
body .pe_filter_thumb.pe_filter_selected,
body .pe_actions,
body .page_actions_wrap,
body #top_profile_menu,
body .piechart_col_header th,
body .ui_scroll_default_theme > .ui_scroll_bar_container > .ui_scroll_bar_outer > .ui_scroll_bar_inner,
body .audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_slide,
body .photos_choose_upload_area,
body .web_cam_photo,
body .photos_choose_bottom,
body .deep_active .replies .reply_field_wrap .reply_field,
body .deep_active .replies .wl_reply_form_wrap .reply_field_wrap .reply_field,
body .deep_active.wall_module .replies .reply_field_wrap .reply_field,
body .deep_active.wall_module .replies .wl_reply_form_wrap .reply_field_wrap .reply_field,
body .deep_active.wall_module .wl_replies_block_wrap .reply_field_wrap .reply_field,
body .deep_active.wall_module .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field,
body .deep_active .wl_replies_block_wrap .reply_field_wrap .reply_field,
body .deep_active .wl_replies_block_wrap .wl_reply_form_wrap .reply_field_wrap .reply_field,
body #mv_comments_header,
body .gifts_box_header,
body .gifts_constr_preview,
body .wk_voting_option_bar,
body .result_list ul li.active,
body .selector_container,
body .result_list ul,
body .summary_tab2:hover,
body input.dark,
body .sticker_hints_tt,
body .deep_active .replies .reply_fakebox,
body .like_share_emoji_wrap div[contenteditable=true],
body .tt_default,
body .tt_default_right,
body .AudioPlaylistSnippet,
body .ActionsMenu__inner,
body .ui_actions_menu,
body .ms_items_more,
body .media_link__label,
body .feed_friends_recomm .ui_gallery_item:first-child,
body .privacy_dropdown .header,
body .privacy_dropdown .body,
body .privacy_dropdown .l_item,
body .privacy_dropdown .l_item_sel,
body .Dropdown__in,
body .emoji_tabs,
body .emoji_bg,
body .video_choose_upload_area,
body .video_add_external,
body .video_choosebox_bottom,
body .im-to-end:focus .im-to-end__button,
body .im-to-end:hover .im-to-end__button,
body .im-to-end__button,
body .links-list__item:hover,
body .PopupHeader,
body .ChatSettingsMembersWidget__add:before,
body .im_stickers_my_tip,
body .medadd_c_linkcon,
body .scrollbar_inner,
body .scrollbar_hovered,
body .scrollbar_inner:hover,
body .friends_cur_filters .token,
body .idd_popup .idd_items_content,
body .idd_popup .idd_header_wrap,
body .audio_pl_edit_box .ape_cover,
body #audio_status_tt .audio_status_sep,
body .audio_row__more_actions .audio_row__more_action:hover,
body #groups_menu_items .groups_edit_menu_items .groups_edit_menu_item .groups_edit_menu_item_line,
body .market_item_photo_container,
body .market_comments_header:hover,
body .market_comments_header,
body .wke_b:hover,
body .mv_desc .can_edit:hover {
  background-color: #242424 !important;
}
body .disabled.selector_container,
body .dividing_line ul li {
  border-color: #3b3f41 !important;
}
body h2,
body .ui_search_field,
body .module_header .header_top,
body .ui_tab_sel,
body .ui_tabs .ui_tab_sel,
body .ui_tabs_box .ui_tab_sel,
body .nim-dialog .nim-dialog--preview,
body .nim-dialog .nim-dialog--text-preview,
body .im-mess-stack .im-mess-stack--content .im-mess-stack--pname > a,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--preview,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--text-preview,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--preview,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--text-preview,
body .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--preview,
body .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--text-preview,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--preview > b,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--preview > b,
body .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--preview > b,
body .im-page .im-search-results-head,
body .audio_page__shuffle_all .audio_page__shuffle_all_button,
body .subheader,
body h4.subheader,
body .right_list_header,
body a.wall_reply_greeting,
body .im-fwd.im-fwd_msg .im-fwd--messages,
body .mv_title,
body .mv_recom_block_title,
body .page_block_header,
body .tabbed_box .summary_tab_sel .summary_tab3,
body .ui_rmenu_item_sel,
body .ui_rmenu_item_sel:hover,
body .box_title_wrap.box_grey .box_title,
body .feedback_header,
body .feedback_header b,
body #payments_box,
body ul.listing li span,
body .audio_row .audio_row__lyrics .audio_row__lyrics_inner,
body .top_notify_cont .feedback_header,
body .feedback_content .feedback_text .wall_post_text,
body .feedback_content .feedback_text .wall_reply_text,
body .top_notify_header,
body .friends_field,
body .right_list_field,
body .ui_tab,
body .ui_tabs .ui_tab,
body .audio_page_player .audio_page_player_title_performer,
body .im_stickerpack_name,
body .bd_header_info,
body .bd_header_month,
body .selector_container td.selector input.focused,
body .selector_container td.selector input.selected,
body .selector_input.selected,
body .profile_warning_label,
body .first > #stats_cont h4,
body .first > .stats_head,
body .tu_row_comment,
body .tickets_reply_text,
body .tickets_header,
body .help_tile__title_a,
body .settings_votes_income .settings_history_amount,
body .audio_page_player2 .audio_page_player_title_song,
body .im-replied--text,
body .ChatSettingsInfo__title,
body .wall_module.wl_post .page_media_caption,
body .wall_module.wl_post .wall_post_text,
body .wl_replies_header,
body #payments_money_transfer_summary,
body .audio_pl_snippet2 .audio_shuffle_all_button,
body .owner_photo_additional,
body .apps_access_item_info b,
body .apps_options_bar .apps_options_bar_left .app_summary_name,
body .flat_button,
body .article,
body .photos_edit_selection_header,
body .help_table_questions__title,
body .page_actions_item,
body .page_actions_dd_label,
body .page_actions_header_inner,
body .top_profile_mrow,
body #stats_cont h4,
body .stats_head,
body .graph_menu_item.graph_menu_item_sel,
body .graph_menu_item.graph_menu_item_sel:hover,
body .feed_updates .explain,
body .feed_update_row .post_author,
body .ui_gallery_wall_cards .wall_card__title_link,
body .im-page .im-page--mess-search,
body .result_list ul li.active,
body .result_list ul li,
body .summary_tab3,
body input.dark,
body .pedit_label,
body .pedit_label_box,
body .selector_container td.selector .token_inner,
body .selector_container td.selector .token_prefix,
body #pedit_result .msg_text,
body .pedit_row_notice,
body .AudioPlaylistSnippet .ActionButton--shuffle__text,
body .ActionsMenu__item,
body .ui_actions_menu_item,
body .notify_sources_tt_content .line_cell .info,
body .notify_sources_tt_content .line_cell,
body .privacy_dropdown .item_sel,
body .privacy_dropdown .item_sel_plus,
body .privacy_dropdown .item,
body .privacy_dropdown .item_sel,
body .privacy_dropdown .item_sel_plus,
body .privacy_dropdown .header,
body .privacy_dropdown .l_header .l_header_label,
body .privacy_dropdown .l_item,
body .privacy_dropdown .l_item_sel,
body .page_media_event .page_media_event_name,
body .Dropdown__in,
body .audio_subscribe_promo__title,
body .audio_subscribe_promo__text,
body .page_name,
body h1.page_name,
body .top_notify_cont,
body .audio_pl_snippet2 .audio_pl_snippet__description,
body .audio_page_layout .audio_recoms_blocks .recoms_special_block_title,
body .audio_page_layout .audio_section__recoms .recoms_special_block_title,
body ._audio_pl.audio_pl_top_audios .audio_row .audio_row__inner:before,
body .Tabs__item--active > *,
body .im_sticker_bl_name,
body .im_stickers_my_tip,
body .im_stickers_my_name,
body .reply_submit_hint_opts .radiobtn,
body .ui_search_fltr_label,
body .ui_search_fltr,
body .friends_cur_filters .token,
body .ui_search_fltr b,
body .idd_popup .idd_item,
body .idd_popup .idd_header,
body .idd_wrap .idd_selected_value,
body .audio_pl_edit_box .ape_cover_title,
body .gtop_complex_message .gtop_content .gtop_header,
body .gtop_complex_message .gtop_content .gtop_message,
body #apps_layer .apps_header .apps_name,
body #group_section_menu .module_body .ui_gallery .ui_gallery_item .groups_menu_item .groups_menu_item_title,
body #groups_menu_promo .apps_group_catalog_promo_header,
body .app_widget_list_row,
body .market_item_title,
body .market_item_price,
body .market_comments_summary,
body .page_block_sub_header,
body .microdata_price,
body .msg_text,
body #mv_pl_tt .mv_tt_playlist {
  color: #ffffff !important;
}
body .im-create,
body .im-create .im-create--tabs,
body .ui_rmenu_item:hover,
body .ui_rmenu_subitem:hover,
body .ui_rmenu_item_sel,
body .ui_rmenu_item_sel:hover,
body .poster__toolbar,
body .poster__slider-arrow,
body .apps_i_wrap,
body .apps_i_policy,
body .apps_options_bar,
body .apps_footer,
body .audio_pl_snippet2,
body #fc_contacts,
body .fc_content,
body .chat_onl_inner,
body .fc_tab,
body .fc_tab_notify,
body #wk_box,
body .pv_author_block,
body .faq_tabs.ui_tabs,
body .tickets_post_field,
body .owner_photo_additional,
body .MessageForward__content,
body .article_ed_layer .article_ed_layer__header,
body .article_layer .article_layer__content_footer,
body .photos_edit_selection_header,
body .pe_tabs_panel,
body .audio_page_player2 .audio_page_player_track_slider.slider.slider_size_1 .slider_back,
body .photo_upload_separator,
body .wall_module .reply_box,
body .wall_module .reply_fakebox_wrap,
body .wall_module .reply_fakebox,
body .tickets_header,
body .box_msg,
body .box_msg_gray,
body .result_list ul li.active,
body .disabled.selector_container,
body .selector_container td.selector .token_inner,
body .selector_container td.selector .token_prefix,
body .emoji_sticker_item.over,
body .emoji_sticker_item:hover,
body .im-page--toolsw,
body .AudioPlaylistSnippet .ActionButton--shuffle:hover,
body .im-chat-input,
body .ActionsMenu__item--hover,
body .ActionsMenu__item:hover,
body .ui_actions_menu_item:hover,
body .media_selector .ms_items_more .ms_item:hover,
body .notify_sources_tt_content .content:not(:hover) .line_cell.selected,
body .notify_sources_tt_content .line_cell:hover,
body .wall_module:not(.search_results) .post--with-likes:not(.post_copy):not(.post_btl):not(.post_wf):not(.post_fr_likes) .wall_text .media_link:last-child,
body .privacy_dropdown .item_sel,
body .privacy_dropdown .item_sel_plus,
body .privacy_dropdown .l_header,
body .privacy_dropdown .l_header .l_header_label,
body .privacy_dropdown .l_item:hover,
body .privacy_dropdown .l_item_sel:hover,
body .thumbed_link__label,
body .Dropdown__item:hover,
body .mention_tt_actions,
body .emoji_tt_wrap,
body .emoji_tab_sel,
body .emoji_tab_sel:hover,
body .emoji_tab:hover,
body .emoji_tabs_l_s:hover,
body .emoji_tabs_r_s:hover,
body .emoji_tabs_l_s,
body .emoji_tabs_r_s,
body .emoji_tab:hover,
body .emoji_shop:hover,
body .emoji_cat_title,
body .im_sticker_bl,
body .ui_search_fltr,
body .idd_popup .idd_item.idd_hl,
body #apps_layer .apps_header_wrapper,
body #groups_menu_items .groups_edit_menu_items .group_apps_list_row_drag_wrapper,
body .ui_ownblock:hover,
body .market_item_content,
body .bookmark_footer,
body .wl_post_reply_form_forbidden,
body .wpost_post,
body .wke_controls,
body .wke_page_title_cont,
body .pages_header_info,
body .pages_history_header_wrap,
body #mv_pl_tt .mv_tt_add_playlist:hover,
body #mv_pl_tt .mv_tt_add_playlist {
  background-color: #3b3f41 !important;
}
body .top_profile_mrow:hover {
  background-color: #3b3f41 !important;
}
body .wall_module .replies_list,
body .ui_rmenu_sep {
  border-top: #A9B7C5 !important;
}
body .rb_box_wrap,
body .poster__view #poster-field-msg,
body .article_snippet .article_snippet__read_btn {
  color: #000000 !important;
}
body .page_photo.page_action_menu_groups .group_notification_settings .group_notification_setting:hover,
body .page_actions_header,
body .page_actions_item:hover:not(.grey_hoverable),
body .tu_last:hover,
body .im-page .im-page--mess-search,
body .gifts_constr_option:hover,
body .audio_pl_edit_box .ape_pl_item:hover {
  background-color: #626568 !important;
}
body div.fc_tab_txt,
body .ui_tabs_header {
  background: none;
}
body a.fc_contact_over,
body .chat_tab_wrap:hover,
body .ui_search_sugg_list .ui_search_suggestion_selected,
body .nim-dialog.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text,
body .nim-dialog.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
body .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out .nim-dialog--inner-text,
body .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_hovered.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
body .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out .nim-dialog--inner-text,
body .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
body .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out .nim-dialog--inner-text,
body .nim-dialog.nim-dialog_classic:not(.nim-dialog_deleted):hover.nim-dialog_unread-out.nim-dialog_muted .nim-dialog--inner-text,
body .audio_layer_container .audio_friend:hover,
body .audio_page__shuffle_all .audio_page__shuffle_all_button:hover,
body .im-mess.im-mess_selected:not(.im-mess_is_editing),
body .im-mess.im-mess_selected:not(.im-mess_is_editing):hover,
body .my_current_info:hover,
body .no_current_info:hover,
body .profile_more_info_link:hover,
body .audio_row.audio_row__current .audio_row_content,
body .tabbed_box .summary_tab_sel a:hover,
body .tabbed_box .summary_tab a:hover,
body .top_notify_cont .feedback_row:not(.dld).hover,
body .top_notify_cont .feedback_row:not(.dld):hover,
body a.ts_contact.active,
body a.ts_search_link.active,
body .ListItem--active,
body .ListItem--can-be-hovered.ListItem--selectable:hover,
body .article_ed_layer .article_ed_layer__list_item:not(.article_ed_layer__list_item_current):hover {
  color: #ffffff !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
}
body div.fc_clist_filter_wrap,
body .flat_button.ui_load_more_btn,
body .settings_block_footer {
  background: #3b3f41 !important;
  border-color: #242424 !important;
}
body .fc_contact_name {
  color: #4a76a8 !important;
}
body a,
body .ui_rmenu_item,
body .ui_rmenu_subitem,
body .post_like,
body .post_reply,
body .post_share,
body .fc_tab_notify,
body .page_media_poll .page_poll_row_percent {
  color: #4a76a8 !important;
}
body .im-page_classic.im-page .im-page--dcontent,
body .ui_grey_block,
body .ui_search,
body .submit_post,
body .im_stickers_store_wrap .ui_tabs,
body .page_block_header,
body .audio_page_player2.audio_page_player_fixed {
  background: #3b3f41 !important;
  border-color: #242424 !important;
}
body .im-page--header,
body .im-page--dialogs-search {
  border: none;
  margin-left: 0;
}
body .ui_search_sugg_list,
body .im-page .im-page--history-new-bar:after,
body .im-page .im-page--history-new-bar:before,
body .ListItem--border:before,
body .replies_open,
body .wr_header,
body .wall_module .page_media_thumbed_link,
body .button_gray button,
body .flat_button.secondary,
body .im_stickers_bl_wrap,
body .ap_layer_wrap .ap_layer__content,
body div.wdd,
body div.wdd.wdd_focused,
body .ui_search_new .ui_search_input_inner,
body .ui_search_new.ui_search_dark .ui_search_input_inner,
body .payments_money_transfer_comment,
body .payments_money_transfer_amount,
body .im_stickers_buy_header,
body .im-page .im-page--top-date-bar {
  color: #ffffff !important;
  background-color: #242424 !important;
  border-color: #242424 !important;
}
body .payments_money_transfer_comment {
  border-top: 1px solid #3b3f41 !important;
}
body .wdd_text {
  color: #ffffff !important;
  background: none !important;
}
body .im_fwd_log_wrap,
body .im_wall_log_wrap {
  border-left: 1px solid #242424 !important;
}
body .profile_info_header,
body .im-page .im-page--history-new-bar > span,
body .photos_period_delimiter_fixed,
body .tabbed_box .summary_tab_sel .summary_tab2,
body .audio_pl_edit_box .ape_header,
body .group_l_row {
  background-color: #3b3f41 !important;
  color: #ffffff !important;
}
body .online:after {
  border: 2px solid #3b3f41 !important;
}
body #mail_box_editable {
  background: #242424 !important;
  color: #ffffff !important;
  border-color: #242424 !important;
}
body .page_block_header {
  background: #3b3f41 !important;
  color: #ffffff !important;
}
body .olist_item_wrap,
body .group_list_row {
  border-bottom: 1px solid #242424 !important;
}
body .audio_page_player.audio_page_player_fixed,
body .audio_page_layout .audio_friends_list,
body .audio_layer_container .audio_page_player,
body .im-page_classic.im-page .im-page--chat-body-wrap-inner,
body .im-page .im-page--history-new-bar,
body .box_body,
body .fc_msgs_unread,
body .pv_cont .narrow_column,
body .box_body .im_stickers_store_wrap .ui_tabs,
body .ap_layer .audio_pl_snippet .audio_pl_snippet__header_inner,
body .audio_pl_snippet .audio_pl_snippet__header,
body .photos_container .photos_row,
body .box_controls,
body .ts_cont_wrap,
body .feedback_row_wrap.unread:not(.feedback_row_touched),
body .pv_white_bg,
body .pva_period_fixed,
body .wk_history_tabs,
body .ChatSettings__content,
body .ChatSettingsInfo,
body .List,
body .ChatSettingsMembersWidget,
body .Button--mobile,
body .ChatSettingsInvitationLink,
body .ChatSettingsResetInvitationLink__text,
body .SubmitArea,
body .audio_pl_snippet2 .audio_shuffle_all_button:hover {
  background-color: #3b3f41 !important;
  border-color: #3b3f41 !important;
}
body .audio_page_layout .audio_page_separator,
body .audio_page_layout .has_friends_block .audio_page__rows_wrap,
body .ui_search_new.ui_search_field_empty .ui_search_button_search,
body input.BlockSearchInput,
body .photos_container_edit_grid .photos_photo_edit_row_desc_placeholder {
  border-color: #242424 !important;
  background-color: #3b3f41 !important;
}
body .im-mess .im-mess--post,
body .feedback_row_answer,
body .payments_money_transfer_amount_wrap,
body .top_notify_show_all,
body .im-mess.im-mess_light {
  border-color: #242424 !important;
  background-color: #242424 !important;
}
body .module {
  border: none;
}
body .page_photos_module {
  padding: 5px;
  height: 135px;
}
body .page_square_photo {
  height: 135px;
  width: 135px;
}
body .audio_page_player .audio_page_player_title {
  color: inherit;
}
body .fakeinput,
body div[contenteditable=true],
body input.big_text,
body input.search,
body input.text,
body textarea,
body .page_media_poll_wrap,
body .ui_tabs.ui_tabs_box {
  border-color: #242424 !important;
  background: none;
  color: #ffffff !important;
}
body .online.mobile:after,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered .nim-dialog--photo .online.mobile:after,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic .nim-dialog--photo .online.mobile:after,
body .nim-dialog:not(.nim-dialog_deleted):hover .nim-dialog--photo .online.mobile:after {
  background-color: #3b3f41 !important;
  border: 2px solid #3b3f41 !important;
}
body .nim-dialog .nim-dialog--name .nim-dialog--name-w,
body .audio_row .audio_row__performer,
body .im-popular--name,
body .im-page .nim-conversation-search-row .nim-dialog--name .nim-dialog--name-w,
body .audio_page_layout .audio_item__title,
body .audio_page_layout .audio_item__title > a,
body .page_counter .count,
body .profile_more_info_link,
body .wall_module .media_desc .a,
body .ui_tab_plain {
  color: #4a76a8 !important;
}
body #side_bar ol li .left_row {
  color: #4a76a8 !important;
}
body #side_bar ol li .left_row:hover {
  background: rgba(0, 0, 0, 0.2) !important;
}
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic,
body .nim-dialog:not(.nim-dialog_deleted):hover,
body .im_msg_audiomsg .audio-msg-track:not(.audio-msg-player):hover,
body .flat_button.ui_load_more_btn:hover,
body .im-mess.im-mess_search:hover,
body .olist_item_wrap:hover,
body .feedback_row_clickable:not(.feedback_row_touched):hover,
body .feed_row ~ .feed_row .feedback_row_clickable:not(.feedback_row_touched):hover,
body .top_notify_show_all:hover {
  background: rgba(0, 0, 0, 0.2) !important;
  border-color: #242424 !important;
}
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_classic.nim-dialog_unread,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog.nim-dialog_hovered,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog:hover,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .im-search-results-head,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_hovered + .nim-dialog,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .im-search-results-head,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected + .nim-dialog,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .im-search-results-head,
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_unread.nim-dialog_classic + .nim-dialog,
body .nim-dialog:not(.nim-dialog_deleted):hover + .im-search-results-head,
body .nim-dialog:not(.nim-dialog_deleted):hover + .nim-dialog,
body .nim-dialog .nim-dialog--content,
body #side_bar .more_div,
body .post_full_like_wrap,
body #ads_left.ads_left_empty + .left_menu_nav_wrap,
body .counts_module,
body .wide_column .page_top,
body .module,
body .wall_module .reply ~ .reply .dld,
body .wall_module .reply ~ .reply .reply_wrap,
body .im-page .im-page--dialogs-footer,
body .ui_tabs,
body .pv_author_block,
body .pv_comments,
body .feed_new_posts,
body .group_l_row,
body .group_l_row:last-child,
body .group_edit_row_sep,
body .media_preview_has_medias,
body .like_cont,
body .page_status_editor .editor,
body div.page_status_input,
body .top_notify_header,
body .friends_list_bl,
body .article_ed_layer .article_ed_layer__publish_settings .article_ed_layer__publish_settings_header,
body .settings_line,
body .settings_privacy_row,
body .settings_bl_row,
body .settings_apps .apps_settings_row_wrap,
body .settings_block_msg,
body .settings_table_row,
body .audio_pl_edit_box .ape_add_audios_btn,
body .audio_pl_edit_box .ape_add_pl_audios_btn,
body .audio_pl_edit_box .ape_header,
body .fakeinput:focus,
body div[contenteditable=true]:focus,
body input.big_text:focus,
body input.dark:focus,
body input.search:focus,
body input.text:focus,
body textarea:focus,
body .box_title_wrap.box_grey,
body .docs_choose_rows .docs_item,
body .audio_layer_container .audio_page__footer,
body .eltt,
body input.dark,
body .pedit_separator,
body .olist_botsh .box_controls,
body .info_msg,
body .feed_row ~ .feed_row .feedback_row,
body .feed_row ~ .feed_row .feedback_sticky_row,
body .feed_row ~ .feed_row_fb_hidden .feed_row:first-child .feedback_row,
body .feedback_sticky_rows:not(:empty) + .feed_row .feedback_row,
body .feedback_sticky_rows:not(:empty) + .feed_row .feedback_sticky_row,
body .ts_search_sep,
body .im-page-pinned,
body .top_notify_cont .top_notify_header,
body .tickets_post_field,
body .tu_row,
body .help_table_question,
body .help_tile_alert,
body .settings_history_table tr td,
body .media_selector .ms_item.ms_item_article,
body .audio_pl_snippet2 .audio_pl_snippet__header,
body .owner_photo_additional,
body .profile_info_block,
body #submit_post_box:not(.shown):not(.own_field) .poster__open-btn-wrapper,
body .poster__toolbar,
body .apps_i_panel,
body .apps_i_policy,
body .article_layer .article_layer__content_footer,
body .photos_edit_selection_header,
body .page_actions_wrap,
body .page_actions_inner,
body .tickets_header,
body .tickets_reply_row,
body .tickets_post_form__panel,
body .top_profile_sep,
body #top_profile_menu,
body #stats_cont h4,
body .stats_head,
body .piechart_table tr td,
body .stats_time_info,
body .feed_updates .wall_module .feed_row .post,
body .photos_choose_bottom,
body .deep_active.wl_post .replies .wl_replies_empty,
body .deep_active.wl_post.wall_module .replies .wl_replies_empty,
body .deep_active.wl_post.wall_module .wl_replies_block_wrap .wl_replies_empty,
body .deep_active.wl_post .wl_replies_block_wrap .wl_replies_empty,
body .deep_active .replies .reply_fakebox,
body .deep_active.wall_module .replies .reply_fakebox,
body .deep_active.wall_module .wl_replies_block_wrap .reply_fakebox,
body .deep_active .wl_replies_block_wrap .reply_fakebox,
body .deep_active .replies .replies_wrap_deep,
body .deep_active.wall_module .replies .replies_wrap_deep,
body .deep_active.wall_module .wl_replies_block_wrap .replies_wrap_deep,
body .deep_active .wl_replies_block_wrap .replies_wrap_deep,
body .im-page .im-page--mess-search,
body .mv_actions_block,
body .wall_module .reply_box,
body .wall_module .reply_fakebox_wrap,
body .mv_info_narrow_column,
body .gifts_section_row,
body .gifts_constr_steps_wrap,
body .box_msg,
body .box_msg_gray,
body .disabled.selector_container table.selector_table,
body .selector_container table.selector_table,
body .result_list,
body .poster__open-btn-wrapper,
body .sticker_hints_tt,
body .tt_default,
body .tt_default_right,
body .im-page--toolsw,
body .im-page--chat-header-in,
body .ms_items_more,
body .Dropdown__in,
body .audio_subscribe_promo,
body .emoji_tt_wrap,
body .video_choosebox_bottom,
body .audio_feed_post,
body .im-to-end:focus .im-to-end__button,
body .im-to-end:hover .im-to-end__button,
body .im-to-end__button,
body .ChatSettingsMembersWidget__add:before,
body .im_stickers_my_row ~ .im_stickers_my_row,
body .ui_search_fltr,
body .friends_cur_filters,
body .idd_popup,
body .audio_pl_edit_box .ape_cover,
body .audio_pl_edit_box .ape_pl_item:hover,
body .audio_pl_edit_box .ape_pl_item .ape_pl_item_inner,
body .post_publish,
body .page_actions_separator,
body .market_item_footer_wrap,
body .market_item_footer_info,
body .market_comments_summary,
body .app_widget_list_row,
body .bookmark_footer,
body .wke_controls,
body .pages_header_info,
body .pages_history_header_wrap,
body #mv_pl_tt .mv_tt_add_playlist {
  border-color: #242424 !important;
}
body .tt_default.tt_down:after,
body .tt_default.tt_down:before,
body .im-chat-input,
body .ms_items_more_wrap.to_up .ms_items_more:before,
body .ms_items_more_wrap.to_up .ms_items_more:after,
body div.fc_tab_txt,
body .feedback_row_wrap,
body .feedback_row,
body .feedback_sticky_row,
body .deep_active .post_replies_header,
body .deep_active.wall_module .post_replies_header,
body .mention_tt_actions,
body .emoji_tt_wrap.tt_down:before,
body .emoji_tt_wrap.tt_down:after,
body .ui_actions_menu_top .ui_actions_menu:after,
body .eltt.eltt_top.eltt_arrow_size_normal > .eltt_arrow_back,
body .eltt.eltt_top.eltt_arrow_size_normal > .eltt_arrow_back .eltt_arrow {
  border-top-color: #242424 !important;
}
body .wall_module .published_by_quote,
body .wall_module .published_sec_quote {
  border-left-color: #242424 !important;
}
body .border_1_right {
  border-right-color: #242424 !important;
}
body .border_1_right,
body .ui_search_fltr:before,
body .ui_search_fltr:after,
body .ms_items_more_wrap.to_down .ms_items_more:before,
body .ms_items_more_wrap.to_down .ms_items_more:after,
body .emoji_tt_wrap.tt_up:before,
body .emoji_tt_wrap.tt_up:after {
  border-bottom-color: #242424 !important;
}
body .im-page--dialogs-search .ui_search_input_block {
  border-bottom: 1px solid #242424 !important;
}
body .im-chat-input,
body .ui_actions_menu:before,
body .ui_actions_menu:after,
body .tt_default.tt_up:before,
body .notify_sources.tt_up:after,
body .notify_sources.tt_up:before,
body .Dropdown--b .Dropdown__in:after,
body .Dropdown--b .Dropdown__in:before,
body .Dropdown--b .Dropdown__in:after,
body .eltt.eltt_bottom.eltt_arrow_size_normal > .eltt_arrow_back,
body .eltt.eltt_bottom.eltt_arrow_size_normal > .eltt_arrow_back .eltt_arrow {
  border-bottom-color: #242424 !important;
}
body .ActionsMenu__inner,
body .ui_actions_menu,
body .privacy_dropdown .header,
body .privacy_dropdown {
  border-color: #3b3f41 !important;
}
body .ui_actions_menu_sep,
body .emoji_tt_wrap.emoji_shop_over.tt_down:after,
body .ui_actions_menu_top .ui_actions_menu:before {
  border-top-color: #3b3f41 !important;
}
body .ActionsMenu__inner:before,
body .ActionsMenu__inner:after {
  border-bottom-color: #3b3f41 !important;
}
body .fc_tab_pointer:before,
body .fc_tab_pointer:after {
  border-left-color: #3b3f41 !important;
}
body .anyClassName {
  border-right-color: #3b3f41 !important;
}
body .im-page .im-page--center-empty {
  background-image: none;
}
body .audio_layer_container .audio_page_layout .audio_search {
  margin: -1px 20px 10px;
}
body .trg-b-banner {
  display: none !important;
}
body .stl_active.over_fast #stl_bg,
body .wall_module .post_like:hover,
body .wall_module .post_reply:hover,
body .wall_module .post_share:hover,
body .audio_row:hover:not(.audio_row__current) .audio_row_content,
body .left_count_wrap,
body .mail_box_cont,
body #group_apps_list .group_apps_list_rows .group_apps_list_row .group_apps_edit,
body .apps_i_panel,
body .page_status_editor .editor,
body .im-page-pinned {
  background-color: #3b3f41 !important;
  color: #4a76a8 !important;
}
body .copy_quote {
  border-left: 1px solid #242424 !important;
}
body .im-mess.im-mess_unread:not(.im-mess_light),
body .feed_new_posts:hover,
body .pv_like:hover {
  background-color: rgba(0, 0, 0, 0.2) !important;
}
body .im-mess.im-mess_selected:last-child:before,
body .im-mess.im-mess_unread:last-child:before {
  background-color: #626568 !important;
  content: none !important;
}
body .im-page_classic.im-page .im-page--chat-input {
  border: none;
  margin-left: 0;
}
body .im-page_classic.im-page .im-page--chat-input .im-chat-input {
  background-color: #626568 !important;
  box-shadow: 0 1px 0 0 #626568, 0 0 0 1px #626568 !important;
}
body .im-chat-input .im-chat-input--txt-wrap {
  border: none !important;
  background: #3b3f41 !important;
}
body .im-page_classic.im-page .im-page--header {
  border-top: none;
  border-left: none;
  border-right: none;
  margin-left: 0;
}
body .wall_module .reply_fakebox,
body .tabbed_box .summary_tabs,
body #mv_pl_tt .mv_tt_private_only + .mv_tt_playlists {
  border: none;
}
body .wall_module .reply_form {
  background-color: #3b3f41 !important;
}
body .im-page_classic.im-page .im-page--dialogs-search {
  box-shadow: 0 0 0 1px #242424 !important;
}
body .audio_pl_snippet {
  background: none;
  border: solid 1px #242424 !important;
}
body .audio_pl_snippet .audio_pl_snippet__info_title {
  color: #ffffff !important;
}
body .im-page_classic .im-page--chat-header {
  border-top: none;
}
body .im-page_classic .im-page--chat-header .im-page--toolsw {
  background-color: #626568 !important;
  border: none;
}
body .im-page_classic .im-page--chat-header .im-page--title-main-inner {
  color: #ffffff !important;
}
body .im-page--back-btn:hover {
  background: #3b3f41 !important;
  color: #ffffff !important;
}
body .profile_info_edit,
body .box_title_wrap.box_grey,
body .eltt {
  background-color: #3b3f41 !important;
  color: #ffffff !important;
}
body .profile_info_header .im-mess-stack--lnk,
body .popup_box_container .im-mess-stack--lnk {
  color: #000000 !important;
}
body .im-mess.im-mess_selected + .im-mess:before,
body .im-mess.im-mess_unread + .im-mess:before {
  background: #3b3f41 !important;
  height: 0 !important;
}
body .im-page_classic .im-page--chat-header {
  border: solid 1px #626568 !important;
}
body .im-page_classic .im-page--chat-header-in,
body .Button--mobile {
  box-shadow: none;
}
body .im-page_classic.im-page .im-page--chat-body-abs,
body .post_top_info_wall_guide,
body .post_top_info_wall_mention,
body .post_top_info_wall_reply {
  box-shadow: 0 1px 0 0 #242424, 0 0 0 1px #242424 !important;
}
body .friends_user_row,
body .post_full_like_wrap,
body .wl_replies_header,
body .wall_module.wl_post .reply .reply_wrap,
body .wall_module .wl_reply_form_fixed .reply_box,
body .wall_module .wl_reply_form_fixed .reply_fakebox_wrap {
  border-top: 1px solid #242424 !important;
}
body .page_square_photo {
  margin: 0;
}
body .audio_pl_edit_box .ape_add_audios_btn:hover,
body .audio_pl_edit_box .ape_add_pl_audios_btn:hover,
body .docs_choose_rows .docs_item:hover,
body .docs_choose_upload_area,
body .docs_choose_upload_area:hover,
body .button_gray button.hover,
body .button_gray button:hover,
body .flat_button.secondary.hover,
body .flat_button.secondary:hover,
body textarea,
body .pv_cont .pv_can_edit:hover,
body em.ts_clist_hl,
body .audio_w_covers .audio_row.ui_gridsorter_moveable .audio_row_content {
  background-color: #242424 !important;
  border-color: #242424 !important;
}
body .im-page--chat-header,
body .tabbed_box .summary_tab .summary_tab3:hover,
body .tabbed_box .summary_tab_sel .summary_tab3:hover,
body .tabbed_box .summary_tab_sel a:hover,
body .tabbed_box .summary_tab a:hover,
body .friends_import_row:hover {
  background: none;
}
body .search_filters_minimized_text {
  background: #3b3f41 url(https://vk.com/images/search_integration.png) no-repeat !important;
}
body .info_msg {
  background: #3b3f41 url(https://vk.com/images/icons/msg_info.png?1) no-repeat 12px 12px !important;
}
body .feedback_row_answer:after,
body .feedback_row_answer:before,
body #top_profile_menu:before,
body #top_profile_menu:after {
  border-bottom-color: #242424 !important;
}
body #top_notify_wrap {
  border-color: #3b3f41 !important;
  background: #3b3f41 !important;
}
body #top_notify_wrap:before,
body #top_notify_wrap:after {
  border-bottom-color: #3b3f41 !important;
}
body .im-chat-input--scroll {
  background: #3b3f41 !important;
  border-radius: 5px;
}
body .im-chat-input--scroll .im-fwd.im-fwd_msg {
  padding: 5px 7px;
}
body input.text.ts_input:focus {
  background-color: #242424 !important;
  color: #ffffff !important;
}
body .msg_text {
  color: #242424 !important;
}
body .bd_day_cell {
  background-color: #3b3f41 !important;
  border-color: #242424 !important;
}
body .bd_day_cell.holiday {
  background-color: #242424 !important;
  border-color: #3b3f41 !important;
}
body .bd_day_cell.left {
  border-color: #242424 !important;
}
body .bd_day_cell.today {
  border-color: #242424 !important;
}
body .bd_arrow {
  background-color: #242424 !important;
}
body .bd_day_head {
  background-color: #242424 !important;
  border-color: #3b3f41 !important;
}
body .msg {
  background-color: #242424 !important;
  border-color: #242424 !important;
}
body .settings_separated_row + .settings_separated_row:after {
  background-color: #242424 !important;
}
body .chat_cont_sh_bottom,
body .chat_cont_sh_top {
  background: linear-gradient(180deg, rgba(216, 223, 230, 0), #3b3f41 80%) !important;
}
body input.text.ts_input,
body .poster__change-bkg-btn {
  background-color: #242424 !important;
}
body .top_nav_btn.active,
body .top_nav_btn:hover,
body .top_audio_player:hover,
body .top_nav_link:hover,
body .top_nav_link.active {
  background-color: rgba(36, 36, 36, 0.5);
}
body #page_header_cont .back,
body .fc_tab_head,
body .box_title_wrap {
  background-color: #3c404b;
  background: -webkit-linear-gradient(#56585D, #2F3034);
  background: -moz-linear-gradient(#56585D, #2F3034);
  background: linear-gradient(#56585D, #2F3034);
  border-color: #3b3f41 !important;
}
body .top_notify_cont ._notify_unread .feed_row:first-child .feedback_row_wrap {
  box-shadow: none;
}
body .top_nav_btn#top_notify_btn .top_nav_btn_icon,
body .top_nav_btn#top_notify_btn:hover .top_nav_btn_icon {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"20"%20height%3D"20"%20viewBox%3D"0%200%2020%2020"><path%20fill%3D"%23fff"%20fill-rule%3D"evenodd"%20d%3D"M8%2C18%20C6.64583333%2C18%205.5%2C17.3%205.5%2C16%20L10.5%2C16%20C10.5%2C17.3%209.35416667%2C18%208%2C18%20Z%20M13.9956933%2C11%20C13.9956933%2C12.5%2016%2C12.5%2016%2C13.5%20C16%2C14%2016%2C15%2013.8955984%2C15%20L1.98430985%2C15%20C-6.19060359e-13%2C15%20-1.62536651e-13%2C14%20-1.63424829e-13%2C13.5%20C-1.63369318e-13%2C12.5%201.98430985%2C12.5%202%2C11%20L2%2C8%20C2%2C4%204.09724901%2C1.5%207%2C1.1%20L7%2C1%20C7%2C0.4%207.5%2C5.74053187e-17%208%2C0%20C8.5%2C0%209%2C0.4%209%2C1%20L9%2C1.1%20C11.902751%2C1.5%2013.9956933%2C4%2013.9956933%2C8%20L13.9956933%2C11%20Z"%20transform%3D"translate(2%201)"%2F><%2Fsvg>');
}
body .top_nav_btn#top_audio .top_nav_btn_icon,
body .top_nav_btn#top_audio:hover .top_nav_btn_icon {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"20"%20height%3D"20"%20viewBox%3D"0%200%2020%2020"><path%20fill%3D"%23fff"%20fill-rule%3D"evenodd"%20d%3D"M14%2C11.1552322%20L14%2C5.5%20L7%2C7.5%20L7%2C15.2999878%20C7%2C15.2999878%206.99923979%2C15.2998738%206.99774901%2C15.2996427%20C6.99305423%2C16.449672%205.98201611%2C17.5525634%204.53840209%2C17.8858479%20C2.90786903%2C18.2622862%201.34293783%2C17.5143682%201.04303041%2C16.2153265%20C0.743122996%2C14.9162848%201.82180821%2C13.5580399%203.45234127%2C13.1816017%20C3.98965862%2C13.0575522%204.51985206%2C13.0556001%205%2C13.1552322%20L5%2C3.9955775%20C5%2C3.44483697%205.42843442%2C2.88315425%205.95693506%2C2.73901771%20L15.0430649%2C0.26098229%20C15.568787%2C0.117603555%2016%2C0.447563354%2016%2C0.999660731%20L16%2C13.2999878%20C15.999253%2C13.2998718%2015.9985027%2C13.2997528%2015.9977491%2C13.2996309%20C15.9930612%2C14.4496644%2014.9820211%2C15.5525622%2013.5384021%2C15.8858479%20C11.907869%2C16.2622862%2010.3429378%2C15.5143682%2010.0430304%2C14.2153265%20C9.743123%2C12.9162848%2010.8218082%2C11.5580399%2012.4523413%2C11.1816017%20C12.9896586%2C11.0575522%2013.5198521%2C11.0556001%2014%2C11.1552322%20Z"%20transform%3D"translate(1%201)"%2F><%2Fsvg>');
}
body .top_audio_play__button,
body .top_audio_play__button:hover,
body .top_audio_play__button:hover:before,
body .top_audio_play__button:before {
  background-color: #ffffff;
}
body .audio_page_player2.audio_page_player_fixed {
  box-shadow: 0 5px 10px #242424 !important;
}
body .top_notify_count,
body .top_nav_btn:hover .top_notify_count {
  border: 2px solid #484a4f;
}
body #ads_left {
  display: none !important;
}
body .im-replied {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
body .slider .slider_amount,
body .slider .slider_handler,
body .audio_page_player2 .audio_page_player_play .icon,
body .audio-msg-track .audio-msg-track--btn {
  background-color: #e82f94 !important;
}
body .audio-msg-track .audio-msg-track--wave-wrapper .audio-msg-track--wave path {
  stroke: #e82f94 !important;
}
body .slider .slider_back {
  background-color: #d1d6de;
}
body .audio_page_player_title_performer a {
  color: #e82f94 !important;
}
body .audio_pl_snippet2 .audio_pl_snippet2 .audio_pl_snippet__info_title,
body .audio_pl_snippet2 .audio_row .audio_row__performers a,
body .audio_pl_snippet2 .audio_pl_snippet_info_maintitle {
  color: #e82f94 !important;
}
body .audio-msg-track .slider .slider_amount {
  background: transparent !important;
}
body .audio_layer_container .audio_page_player_wrap {
  box-shadow: 0 5px 10px #242424 !important;
  border-bottom: 0 solid #e7e8ec !important;
}
body .ChatSettingsInfo {
  box-shadow: 0 1px 0 #242424 !important;
}
body .List--border,
body .ChatSettingsMembersWidget {
  box-shadow: 0 1px 0 #242424, 0 -1px 0 #242424 !important;
}
body .ListItem--active,
body .ListItem--can-be-hovered.ListItem--selectable:hover,
body .Tabs {
  border-color: #242424 !important;
}
body .im-create.im-create_classic .im-create--table {
  box-shadow: 0 1px 0 0 #242424, 0 0 0 1px #242424 !important;
}
body .page_list_module .line_cell .desc_info,
body .page_list_module .line_cell .extra_info,
body .page_list_module .line_cell .info {
  padding: 4px 0 0 7px;
}
body .poster__slider-arrow._right {
  box-shadow: -5px 0 5px 0 #3b3f41 !important;
}
body .poster__slider-arrow._left {
  box-shadow: 5px 0 5px 0 #3b3f41 !important;
}
body .article > h1 {
  color: #ffffff !important;
}
body #fc_ctabs_cont,
body .fc_tab {
  border: none!important;
}
body .chats_sp.fc_clist_search_icon {
  margin: 10px 7px 0 0;
}
body .post_top_info_ads_group_members {
  box-shadow: 0 0 0 1px #242424, 0 1px 0 0 #242424 !important;
}
body .ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_bottom,
body .ui_scroll_default_theme.ui_scroll_emoji_theme > .ui_scroll_overflow > .ui_scroll_shadow_top,
body .emoji_tabs_l_sc,
body .emoji_tabs_l_sc,
body .emoji_tabs_r_sc,
body .emoji_cats_title_helper:after {
  background-image: none;
}
body .ui_rmenu_count {
  float: left;
  padding: 1px 0;
}
body .ui_rmenu_item {
  padding: 0 5px 0 10px;
}
body .im-page .im-page--dialogs {
  float: right;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
body .im-page .im-page--history {
  margin-left: 0;
  margin-right: 317px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
body .im-page_classic.im-page .im-page--dialogs-footer {
  box-shadow: none;
}
body .nim-dialog:not(.nim-dialog_deleted).nim-dialog_selected {
  background-color: rgba(29, 29, 29, 0.5) !important;
}
body .im-create.im-create_material {
  right: 0;
  position: absolute;
}
`,
       head = document.head || document.getElementsByTagName('head')[0],
       style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
})();
