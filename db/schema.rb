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

ActiveRecord::Schema.define(version: 20151130032503) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "things", force: true do |t|
    t.string   "name",            default: "",     null: false
    t.integer  "topic_id",                         null: false
    t.string   "thing_type",      default: "todo", null: false
    t.boolean  "important",       default: false,  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "complete",        default: false,  null: false
    t.boolean  "legit",           default: true,   null: false
    t.integer  "previous_id"
    t.integer  "first_id"
    t.integer  "times_postponed", default: 0,      null: false
  end

  create_table "topics", force: true do |t|
    t.string   "name",        null: false
    t.string   "week"
    t.string   "day_of_week"
    t.string   "year_month"
    t.integer  "user_id",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "day_key"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
