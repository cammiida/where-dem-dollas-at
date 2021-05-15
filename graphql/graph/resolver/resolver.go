package resolver

import (
	"wdda-gql/graph/exec"
	"wdda-gql/graph/model"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	accounts   []*model.Account
	users      []*model.User
	lastUserId int
	usersChan  chan *model.User
}

func NewResolver() *Resolver {
	users := make([]*model.User, 0)
	users = append(users, &model.User{ID: "1", Name: "Geir"})
	users = append(users, &model.User{ID: "2", Name: "Mona"})

	return &Resolver{
		accounts:   make([]*model.Account, 0),
		users:      users,
		lastUserId: 3,
		usersChan:  make(chan *model.User),
	}
}

func NewQueryResolver(
	resolver *Resolver,
) exec.QueryResolver {
	return &queryResolver{
		Resolver: resolver,
	}
}

func NewMutationResolver(
	resolver *Resolver,
) exec.MutationResolver {
	return &mutationResolver{
		Resolver: resolver,
	}
}

func NewSubscriptionResolver(
	resolver *Resolver,
) exec.SubscriptionResolver {
	return &subscriptionResolver{
		Resolver: resolver,
	}

}
