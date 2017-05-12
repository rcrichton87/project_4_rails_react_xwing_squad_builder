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

ActiveRecord::Schema.define(version: 20170512094624) do

  create_table "applied_upgrades", force: :cascade do |t|
    t.integer  "piloted_ship_id"
    t.integer  "upgrade_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "applied_upgrades", ["piloted_ship_id"], name: "index_applied_upgrades_on_piloted_ship_id"
  add_index "applied_upgrades", ["upgrade_id"], name: "index_applied_upgrades_on_upgrade_id"

  create_table "piloted_ships", force: :cascade do |t|
    t.integer  "squad_id"
    t.integer  "ship_id"
    t.integer  "pilot_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "piloted_ships", ["pilot_id"], name: "index_piloted_ships_on_pilot_id"
  add_index "piloted_ships", ["ship_id"], name: "index_piloted_ships_on_ship_id"
  add_index "piloted_ships", ["squad_id"], name: "index_piloted_ships_on_squad_id"

  create_table "pilots", force: :cascade do |t|
    t.string   "name"
    t.integer  "cost"
    t.integer  "pilot_skill"
    t.string   "ability"
    t.integer  "ship_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "pilots", ["ship_id"], name: "index_pilots_on_ship_id"

  create_table "ships", force: :cascade do |t|
    t.string   "name"
    t.string   "faction"
    t.string   "stats"
    t.integer  "cost"
    t.string   "upgrade_slots"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "squads", force: :cascade do |t|
    t.string   "name"
    t.string   "faction"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "squads", ["user_id"], name: "index_squads_on_user_id"

  create_table "upgrades", force: :cascade do |t|
    t.string   "name"
    t.integer  "cost"
    t.string   "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "slot"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
