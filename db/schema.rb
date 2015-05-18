# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150517224654) do

  create_table "areas", force: :cascade do |t|
    t.string   "name"
    t.boolean  "face_up",    default: false
    t.integer  "position_x"
    t.integer  "position_y"
    t.string   "layout"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "areas", ["name"], name: "index_areas_on_name"

  create_table "areas_games", id: false, force: :cascade do |t|
    t.integer "area_id", null: false
    t.integer "game_id", null: false
  end

  add_index "areas_games", ["area_id", "game_id"], name: "index_areas_games_on_area_id_and_game_id"
  add_index "areas_games", ["game_id", "area_id"], name: "index_areas_games_on_game_id_and_area_id"

  create_table "cards", force: :cascade do |t|
    t.integer  "table_id"
    t.integer  "playing_card_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "cards", ["playing_card_id"], name: "index_cards_on_playing_card_id"
  add_index "cards", ["table_id"], name: "index_cards_on_table_id"

  create_table "decks", force: :cascade do |t|
    t.string   "name"
    t.integer  "height_px"
    t.integer  "width_px"
    t.integer  "border_radius_px"
    t.boolean  "rotation_matters", default: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  add_index "decks", ["name"], name: "index_decks_on_name"

  create_table "decks_games", id: false, force: :cascade do |t|
    t.integer "deck_id", null: false
    t.integer "game_id", null: false
  end

  add_index "decks_games", ["deck_id", "game_id"], name: "index_decks_games_on_deck_id_and_game_id"
  add_index "decks_games", ["game_id", "deck_id"], name: "index_decks_games_on_game_id_and_deck_id"

  create_table "faces", force: :cascade do |t|
    t.integer  "deck_id"
    t.integer  "playing_card_id"
    t.string   "image"
    t.string   "type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "faces", ["deck_id"], name: "index_faces_on_deck_id"
  add_index "faces", ["playing_card_id"], name: "index_faces_on_playing_card_id"

  create_table "games", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "games", ["name"], name: "index_games_on_name"

  create_table "matches", force: :cascade do |t|
    t.integer  "table_id"
    t.integer  "game_id"
    t.integer  "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "matches", ["game_id"], name: "index_matches_on_game_id"
  add_index "matches", ["table_id"], name: "index_matches_on_table_id"

  create_table "players", force: :cascade do |t|
    t.integer  "match_id"
    t.integer  "user_id"
    t.integer  "rank"
    t.integer  "play_order"
    t.boolean  "dealer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "players", ["match_id"], name: "index_players_on_match_id"
  add_index "players", ["rank"], name: "index_players_on_rank"
  add_index "players", ["user_id"], name: "index_players_on_user_id"

  create_table "playing_cards", force: :cascade do |t|
    t.integer  "deck_id"
    t.string   "name"
    t.string   "display_name"
    t.boolean  "extra",        default: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "playing_cards", ["deck_id"], name: "index_playing_cards_on_deck_id"
  add_index "playing_cards", ["name"], name: "index_playing_cards_on_name"

  create_table "plays", force: :cascade do |t|
    t.integer  "card_id"
    t.integer  "area_id"
    t.integer  "holdable_id"
    t.string   "holdable_type"
    t.boolean  "face_up",       default: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  add_index "plays", ["area_id"], name: "index_plays_on_area_id"
  add_index "plays", ["card_id"], name: "index_plays_on_card_id"
  add_index "plays", ["holdable_id"], name: "index_plays_on_holdable_id"

  create_table "tables", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tables", ["name"], name: "index_tables_on_name"

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "remember_token"
    t.string   "password_digest"
    t.string   "password_reset_token"
    t.datetime "password_reset_sent_at"
    t.boolean  "admin",                  default: false
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["password_reset_token"], name: "index_users_on_password_reset_token"
  add_index "users", ["remember_token"], name: "index_users_on_remember_token"

end
